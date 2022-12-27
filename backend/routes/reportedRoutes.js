const express = require('express')
const router = express.Router()
const 
{ 
    deleterUser,
    getrUsers,
    createReport,
} = require('../controllers/reportedController.js')

router.get('/', getrUsers)
router.post('/', createReport)

router.route('/:id')
.delete(deleterUser)

module.exports=router 