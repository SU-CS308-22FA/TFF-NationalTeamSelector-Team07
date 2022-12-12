const asyncHandler = require('express-async-handler')


const Historic = require('../models/historicDataModel')


// @desc Get user team
// @route GET /api/teams
// @access Private
const getHistorics = asyncHandler(async (req, res) => {

  const historics = await Historic.find()
  res.status(200).json(historics)

})

// @desc Get user team
// @route GET /api/teams/:id
// @access Private
const getHistoric = asyncHandler(async (req, res) => {

    Historic.findById(req.params.pid, (error, data) => {
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
const createHistoric = asyncHandler(async (req, res) => {
  console.log("historicDataController: line 35")
    const {pid, pos, monthlyGame, gk_saveRatio, gk_cleanSheets, gk_RunsOut, def_tackle, def_interception, def_clearence, mid_accPassRatio, mid_assists, mid_keyPasses, att_numOfGoals, att_expectedGoalsRatio, att_shootsOnTargetRatio } = req.body
  
    if(!fullName || !team || !position || !raiting || !DateOfBirth || !PreferedFoot || !Age || !PlaceOfBirth) {
        res.status(400)
        console.log("historicDataController: line 40")
        throw new Error('Please fill all spaces'),
        console.log(pid, fullName, team, position, raiting, DateOfBirth, PreferedFoot, Age, PlaceOfBirth)
    }
    
    const historic = await Historic.create({
        pid, 
        pos, 
        monthlyGame,
        gk_saveRatio, 
        gk_cleanSheets, 
        gk_RunsOut, 
        def_tackle, 
        def_interception, 
        def_clearence, 
        mid_accPassRatio, 
        mid_assists, 
        mid_keyPasses, 
        att_numOfGoals, 
        att_expectedGoalsRatio, 
        att_shootsOnTargetRatio
    })
    console.log("historic controller:" + historic.pid)
    res.status(201).json(historic)
})


module.exports = {
    getHistorics,
    getHistoric,
    createHistoric,
}