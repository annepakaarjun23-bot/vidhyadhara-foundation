'use strict'
const mongoose = require('mongoose')

let isConnected = false

async function connectDB() {
  if (isConnected) return

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set')
  }

  try {
    await mongoose.connect(uri, {
      dbName: 'foundations',
      bufferCommands: false,
    })
    isConnected = true
    console.log(`[DB] MongoDB connected — database: foundations`)
  } catch (err) {
    console.error(`[DB] MongoDB connection failed:`, err.message)
    throw err
  }

  mongoose.connection.on('disconnected', () => {
    isConnected = false
    console.warn(`[DB] MongoDB disconnected`)
  })

  mongoose.connection.on('error', (err) => {
    console.error(`[DB] MongoDB error:`, err.message)
  })

  mongoose.connection.on('reconnected', () => {
    isConnected = true
    console.log(`[DB] MongoDB reconnected`)
  })
}

module.exports = { connectDB }
