const express = require('express')
const router = express.Router()
const {getHistorics, getHistoric, createHistoric} = require('../controllers/historicDataController.js')

const {protect} = require('../middleware/authMiddleware')



//router.route('/').get(getPlayers)
router.get('/', getHistorics)
router.post('/', createHistoric)

//routes for the pid search
router.route('/:id')
.get(getHistoric)



module.exports = router
