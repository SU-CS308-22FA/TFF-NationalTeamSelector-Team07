const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    player: {
        type: String,
        required: [true, 'Please select a player'],
        enum: ['Ronaldo', 'messi', 'Arda Turan','Sabri','Hasan Şaş']
    },
    teamName: {
        type: String,
        required: [true, 'Please name your team']
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('teams', teamSchema)