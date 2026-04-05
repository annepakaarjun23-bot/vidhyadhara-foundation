'use strict'
const Volunteer = require('../models/Volunteer')

async function registerVolunteer(req, res) {
  try {
    const { firstName, lastName, email, phone, role, message } = req.body

    const missing = []
    if (!firstName || !firstName.trim()) missing.push('firstName')
    if (!lastName || !lastName.trim()) missing.push('lastName')
    if (!email || !email.trim()) missing.push('email')
    if (!phone || !phone.trim()) missing.push('phone')
    if (!role || !role.trim()) missing.push('role')
    if (!message || !message.trim()) missing.push('message')

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}`,
        fields: missing,
      })
    }

    const volunteer = await Volunteer.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      role: role.trim(),
      message: message.trim(),
    })

    console.log(`[Volunteer] New application at ${new Date().toISOString()} — ID: ${volunteer._id}`)

    return res.status(201).json({
      success: true,
      message: 'Application received. We will be in touch before the next program.',
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({
        success: false,
        message: messages[0] || 'Validation failed.',
        errors: messages,
      })
    }
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'This email address is already registered.',
      })
    }
    console.error(`[Volunteer] Registration error at ${new Date().toISOString()}:`, err.message)
    return res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'production'
        ? 'Internal server error. Please try again later.'
        : err.message,
    })
  }
}

async function getVolunteers(req, res) {
  try {
    const volunteers = await Volunteer.find({}, '-__v').sort({ createdAt: -1 })
    return res.status(200).json({ success: true, count: volunteers.length, data: volunteers })
  } catch (err) {
    console.error(`[Volunteer] Fetch error:`, err.message)
    return res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'production' ? 'Internal server error.' : err.message,
    })
  }
}

module.exports = { registerVolunteer, getVolunteers }
