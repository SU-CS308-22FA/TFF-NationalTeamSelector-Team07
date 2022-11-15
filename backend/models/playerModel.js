const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'please add name and surname']
    },
    team: {
        type: String,
        required: [true, 'please add a team'],
    },
    position: {
        type: String,
        required: [true, 'please add a position'],
        
    },
    raiting: {
        type: String,
        required: [true, 'please add a raiting'],
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('players', playerSchema)