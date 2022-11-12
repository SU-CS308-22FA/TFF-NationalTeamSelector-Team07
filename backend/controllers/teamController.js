const asyncHandler = require('express-async-handler')

const user = require('../models/userModel')

const team = require('../models/teamModel')


// @desc Get user team
// @route GET /api/teams
// @access Private
const getTeams = asyncHandler(async (req, res) => {

    // get user using the id and jwt
    const user = await user.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const teams = await team.find({user: req.user.id})
    
    res.status(200).json(teams)
})

// @desc Get user team
// @route GET /api/teams/:id
// @access Private
const getTeam = asyncHandler(async (req, res) => {

    // get user using the id and jwt
    const user = await user.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const team = await team.findById(req.params.id)
    
    if(!team) {
        res.status(404)
        throw new Error('Team not found')
    }

    if(team.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorize')
    }
    res.status(200).json(team)
})

// @desc create a new team
// @route POST /api/teams
// @access Private
const createTeam = asyncHandler(async (req, res) => {

    const {player, teamName} = req.body

    if(!player || !teamName) {
        res.status(400)
        throw new Error('Please fill all spaces')
    }
    
    // get user using the id and jwt
    const user = await user.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const team = await team.createTeam({
        player,
        teamName,
        user: req.user.id
    })

    res.status(201).json(team)
})

// @desc Delete team
// @route DELETE /api/teams/:id
// @access Private
const deleteTeam = asyncHandler(async (req, res) => {

    // get user using the id and jwt
    const user = await user.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const team = await team.findById(req.params.id)
    
    if(!team) {
        res.status(404)
        throw new Error('Team not found')
    }

    if(team.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorize')
    }

    await team.remove()

    res.status(200).json({success: true})
})

// @desc Update team
// @route PUT /api/teams/:id
// @access Private
const updateTeam = asyncHandler(async (req, res) => {

    // get user using the id and jwt
    const user = await user.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const team = await team.findById(req.params.id)
    
    if(!team) {
        res.status(404)
        throw new Error('Team not found')
    }

    if(team.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorize')
    }

    const updatedTeam = await team.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTeam)
})

module.exports = {
    getTeams,
    getTeam,
    createTeam,
    deleteTeam,
    updateTeam,
}