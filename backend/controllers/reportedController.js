const asyncHandler = require('express-async-handler')
const rUser = require('../models/reportUserModel')

const User = require('../models/userModel')

// @desc create a new team
// @route POST /api/teams
// @access Private
const createReport = asyncHandler(async (req, res) => {

    const {email, name} = req.body

    const user = await User.findOne({email})
    
    const ruser = await rUser.create({
        
        user: user._id,
        name: name,
    })

    res.status(201).json(ruser)
})

// @desc Delete user
// @route DELETE /api/reportedUsers/:id
// @access Private

const deleterUser = asyncHandler(async (req, res) => {
    console.log('user controller ' + req.params.id)
    // get user using the id and jwt
    const user = await rUser.findById(req.params.id)

    if(!user) {
        res.status(404)
        throw new Error('User not found')
    }

    await rUser.findByIdAndDelete(req.params.id)

    res.status(200).json("User has been deleted");
})


const getrUsers = asyncHandler(async (req, res) => {
    
    const users = await rUser.find()
    res.status(200).json(users)
    //console.log('user controller ' + users)
  
  })


module.exports = {
    createReport,
    deleterUser,
    getrUsers
}