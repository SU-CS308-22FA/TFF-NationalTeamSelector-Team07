const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')
const User = require('../models/userModel')

// @desc create comment
// @route POST /api/comments
// @access Private
const createComment = asyncHandler(async (req, res) => {

    const {email, comment} = req.body
    const user = await User.findOne({email})
    if(!comment){
        res.status(400)
        throw new Error('Please fill the comment field')
    }
    else{
        const commentProfile = await Comment.create({
            user: user._id,
            email: email,
            commentOnProfile: comment
        })
        res.status(201).json(commentProfile)
    }
    }    
)

module.exports = {
    createComment
}