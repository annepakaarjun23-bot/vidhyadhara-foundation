'use strict'
const Student = require('../models/Student')

async function registerStudent(req, res) {
  try {
    const { firstName, lastName, email, phone, class: studentClass, school, address, reason } = req.body

    // Validate required fields
    const missing = []
    if (!firstName || !firstName.trim()) missing.push('firstName')
    if (!lastName || !lastName.trim()) missing.push('lastName')
    if (!email || !email.trim()) missing.push('email')
    if (!phone || !phone.trim()) missing.push('phone')
    if (!studentClass || !studentClass.trim()) missing.push('class')
    if (!address || !address.trim()) missing.push('address')
    if (!reason || !reason.trim()) missing.push('reason')

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}`,
        fields: missing,
      })
    }

    const student = await Student.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      class: studentClass.trim(),
      school: school ? school.trim() : '',
      address: address.trim(),
      reason: reason.trim(),
    })

    console.log(`[Student] New registration at ${new Date().toISOString()} — ID: ${student._id}`)

    return res.status(201).json({
      success: true,
      message: 'Registration submitted successfully. We will contact you with program details.',
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
    console.error(`[Student] Registration error at ${new Date().toISOString()}:`, err.message)
    return res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'production'
        ? 'Internal server error. Please try again later.'
        : err.message,
    })
  }
}

async function getStudents(req, res) {
  try {
    const students = await Student.find({}, '-__v').sort({ createdAt: -1 })
    return res.status(200).json({ success: true, count: students.length, data: students })
  } catch (err) {
    console.error(`[Student] Fetch error:`, err.message)
    return res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'production' ? 'Internal server error.' : err.message,
    })
  }
}

module.exports = { registerStudent, getStudents }
