const mongoose = require('mongoose')

const historicSchema = mongoose.Schema({
    pid: {
        type: String,
        required: [true, 'please add name and surname']
    },
    pos: {
        type: String,
        required: [true, 'please add name and surname']
    },
    monthlyGame: {
        type: String,
        required: [true, 'please add a team'],
    },

    gk_saveRatio: {
        type: String,
        required: [true, 'please add a team'],
    },
    gk_cleanSheets: {
        type: String,
        required: [true, 'please add a position'],
        
    },
    gk_RunsOut: {
        type: String,
        required: [true, 'please add a raiting'],
    },
    def_tackle: {
        type: String,
        required: [true, 'please add date of birth']
    },
    def_interception: {
        type: String,
        required: [true, 'please add a team'],
    },
    def_clearence: {
        type: String,
        required: [true, 'please add a position'],
        
    },
    mid_accPassRatio: {
        type: String,
        required: [true, 'please add a raiting'],
    },
    mid_assists: {
        type: String,
        required: [true, 'please add a position'],
        
    },
    mid_keyPasses: {
        type: String,
        required: [true, 'please add a raiting'],
    },
    att_numOfGoals: {
        type: String,
        required: [true, 'please add date of birth']
    },
    att_expectedGoalsRatio: {
        type: String,
        required: [true, 'please add a team'],
    },
    att_shootsOnTargetRatio: {
        type: String,
        required: [true, 'please add a position'],
        
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('historic', historicSchema)