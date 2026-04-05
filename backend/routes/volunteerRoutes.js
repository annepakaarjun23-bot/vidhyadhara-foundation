'use strict'
const express = require('express')
const { registerVolunteer, getVolunteers } = require('../controllers/volunteerController')

const router = express.Router()

router.post('/register-volunteer', registerVolunteer)
router.get('/volunteers', getVolunteers)

module.exports = router
