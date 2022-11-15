const express = require('express')
const router = express.Router()
const {getPlayers, createPlayer, getPlayer, deletePlayer, updatePlayer, editPlayer} = require('../controllers/playerController.js')

const {protect} = require('../middleware/authMiddleware')



router.route('/').get(getPlayers)
router.post('/', createPlayer)

router.route('/:id')
.get(getPlayer)
.get(editPlayer)
.delete(deletePlayer)
.put(updatePlayer)

module.exports = router
