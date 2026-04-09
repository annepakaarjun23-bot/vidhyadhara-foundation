'use strict'
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const mongoose = require('mongoose')
const { connectDB } = require('./config/db')
const studentRoutes = require('./routes/studentRoutes')
const volunteerRoutes = require('./routes/volunteerRoutes')

// Global error handlers — must be registered first
process.on('uncaughtException', (err) => {
  console.error(`[Fatal] Uncaught Exception at ${new Date().toISOString()}:`, err.message)
  process.exit(1)
})

process.on('unhandledRejection', (reason) => {
  console.error(`[Fatal] Unhandled Rejection at ${new Date().toISOString()}:`, reason)
  process.exit(1)
})

const app = express()

// Security headers
app.use(helmet())

// Compression
app.use(compression())

// HTTP request logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))

// CORS — strict whitelist in production
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:3000')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean)

app.use(cors({
  origin(origin, callback) {
    // Allow server-to-server requests (no origin)
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) return callback(null, true)

    // Allow local network in development
    if (process.env.NODE_ENV !== 'production') {
      if (
        origin.startsWith('http://192.168.') ||
        origin.startsWith('http://10.') ||
        origin.startsWith('http://127.0.0.1') ||
        origin.startsWith('http://localhost')
      ) {
        return callback(null, true)
      }
    }

    callback(new Error(`CORS: origin ${origin} not allowed`))
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Rate limiting — global
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
})

// Stricter limit for registration endpoints
const registrationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many submissions from this IP. Please try again later.' },
})

app.use(globalLimiter)
app.use('/api/register-student', registrationLimiter)
app.use('/api/register-volunteer', registrationLimiter)

// Body parsing — 1mb limit
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: false, limit: '1mb' }))

// Health check — includes DB status
app.get('/health', (req, res) => {
  const dbState = mongoose.connection.readyState
  const dbStatus = dbState === 1 ? 'connected' : dbState === 2 ? 'connecting' : 'disconnected'
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: dbStatus,
    uptime: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
  })
})

// API routes
app.use('/api', studentRoutes)
app.use('/api', volunteerRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' })
})

// Global error handler — no stack traces in production
app.use((err, req, res, next) => {
  const timestamp = new Date().toISOString()
  console.error(`[Error] ${timestamp} ${req.method} ${req.path}: ${err.message}`)

  if (err.message && err.message.startsWith('CORS:')) {
    return res.status(403).json({ success: false, message: 'Request not allowed.' })
  }

  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Internal server error.'
      : err.message,
  })
})

// Start server — connect to DB first, then listen
const PORT = parseInt(process.env.PORT || '4000', 10)

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`[Server] Vidhyadhara Foundation API running on port ${PORT}`)
      console.log(`[Server] Environment: ${process.env.NODE_ENV || 'development'}`)
      console.log(`[Server] Health check: http://localhost:${PORT}/health`)
    })
  } catch (err) {
    console.error('[Server] Failed to start:', err.message)
    process.exit(1)
  }
}

startServer()
