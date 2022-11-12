const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'please add a name'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add a password'],
        
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('users', userSchema)