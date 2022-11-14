const express = require('express')
const router = express.Router()
const 
{ 
    registerUser, 
    loginUser, 
    loginAdmin,
    getMe, 
    updateUser,
    deleteUser 
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/adminlogin', loginAdmin)
router.get('/me', protect, getMe)

router.route('/:id').put(updateUser).delete(deleteUser)



module.exports=router 