const asyncHandler = require('express-async-handler')
const { collection } = require('../models/playerModel')

const player = require('../models/playerModel')


// @desc Get user team
// @route GET /api/teams
// @access Private
const getPlayers = asyncHandler(async (req, res) => {

    player.find((error, data) => {
        if (error) {
            res.status(401)
            throw new Error('No players') 
        } else {
          res.status(200).json(data)
        }
      })
})

// @desc Get user team
// @route GET /api/teams/:id
// @access Private
const getPlayer = asyncHandler(async (req, res) => {

    player.findById(req.params.id, (error, data) => {
        if (error) {
          throw new Error('Player not found')
        } else {
          res.status(200).json(data)
        }
      })
})

// @desc create a new team
// @route POST /api/teams
// @access Private
const createPlayer = asyncHandler(async (req, res) => {
  //console.log('playerController: ', res)
    // player.create(req.body, (error, data) => {
    //     if (error) {
    //       throw new Error('Please fill all spaces')
    //     } else {
    //       console.log(data)
          
    //     }
    //   })

      
    //   const player = await Team.create({
    //     fullName,
    //     team,
    //     position,
    //     raiting
    // })
    // res.status(201).json(player)
    //-----
    const {fullName, team, position, raiting} = req.body
  
    if(!fullName || !team || !position || !raiting) {
        res.status(400)
        throw new Error('Please fill all spaces'),
        console.log(fullName, team, position, raiting)
    }
    
    const Player = await player.create({
        fullName,
        team,
        position,
        raiting
    })

    res.status(201).json(Player)
})

// @desc Delete team
// @route DELETE /api/teams/:id
// @access Private
const deletePlayer = asyncHandler(async (req, res) => {

    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.status(200).json({
            msg: data,
          })
        }
      })
})

const editPlayer = asyncHandler(async (req, res) => {

    player.findById(req.params.id, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.status(200).json(data)
        }
      })
})

// @desc Update team
// @route PUT /api/teams/:id
// @access Private
const updatePlayer = asyncHandler(async (req, res) => {

    player.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        (error, data) => {
          if (error) {
            return next(error)
            console.log(error)
          } else {
            res.json(data)
            console.status(200).log('Player updated successfully !')
          }
        },
      )
})

module.exports = {
    getPlayers,
    getPlayer,
    createPlayer,
    editPlayer,
    deletePlayer,
    updatePlayer,
}