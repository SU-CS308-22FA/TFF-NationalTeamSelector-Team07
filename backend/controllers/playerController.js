const asyncHandler = require('express-async-handler')
const { collection } = require('../models/playerModel')

const player = require('../models/playerModel')


// @desc Get user team
// @route GET /api/teams
// @access Private
const getPlayers = asyncHandler(async (req, res) => {

  const players = await player.find()
  res.status(200).json(players)

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



// @desc Delete user
// @route DELETE /api/teams/:id
// @access Private
const deletePlayer = asyncHandler(async (req, res) => {
  
  // get user using the id and jwt
  const Player = await player.findById(req.params.id)

  if(!Player) {
      res.status(404)
      throw new Error('Player not found')
  }

  await player.findByIdAndDelete(req.params.id)

  res.status(200).json("Player has been deleted");
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