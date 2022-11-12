const express = require('express')
const router = express.Router()
const {getTeams, createTeam, getTeam, deleteTeam, updateTeam} = require('../controllers/teamController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTeams).post(protect, createTeam)

router.route('/:id')
.get(protect, getTeam)
.delete(protect, deleteTeam)
.put(protect, updateTeam)

module.exports = router