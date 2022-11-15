const express = require('express')
const router = express.Router()
const {
    getTeams,
    createTeam, 
    getTeam, 
    deleteTeam, 
    updateTeam
} = require('../controllers/teamController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getTeams)

router.post('/', createTeam)

router.route('/:id')
.get(protect, getTeam)
.delete(protect, deleteTeam)
.put(protect, updateTeam)

module.exports = router