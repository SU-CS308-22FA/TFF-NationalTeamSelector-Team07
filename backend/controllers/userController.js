const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// @desc    REGISTER A NEW USER
// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (req,res) => {
    const {name,email,password} = req.body //data stored here

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please incude all fields')
    }

    //Find if user already exists

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        console.log('user exist')
        throw new Error('User already exists')
    }

    //hash the password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create a user

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        console.log('invalid')
        throw new error('Invalid user data')
    }
})


// @desc   LOGIN USER
// @route   /api/users/login
// @access  Public

const loginUser = asyncHandler(async (req,res) => {


    const {email,password} = req.body
    const user = await User.findOne({email: email, isAdmin: false})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401)
        throw new error('Invalid Credentials')
    }

})
// @desc   LOGIN USER
// @route   /api/users/login
// @access  Public

const loginAdmin = asyncHandler(async (req,res) => {


    const {email,password} = req.body
    const user = await User.findOne({email: email, isAdmin: true})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            isAdmin: user.isAdmin,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401)
        throw new error('Invalid Credentials')
    }

})

// @desc Update team
// @route PUT /api/teams/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const {name, email} = req.body

    // get user using the id and jwt
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {name: name, email: email}, {new: true})

    res.status(200).json(updatedUser)
})

// @desc Delete user
// @route DELETE /api/teams/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    console.log('user controller ' + req.params.id)
    // get user using the id and jwt
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404)
        throw new Error('User not found')
    }

    await User.findByIdAndDelete(req.params.id)

    res.status(200).json("Account has been deleted");
})

// @desc    get current user
// @route   /api/users/me
// @access  Private

const getMe = asyncHandler(async (req,res) => {
const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name
}
    res.status(200).json(user)
})


//generate token -> take token to see payload from jwt website.

const generateToken = (id) => {
    return jwt.sign({id }, 'abc123', {
        expiresIn: '3d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    loginAdmin,
    updateUser,
    deleteUser,
    getMe,
}