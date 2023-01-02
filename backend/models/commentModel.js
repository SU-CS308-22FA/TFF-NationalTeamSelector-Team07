const mongoose = require('mongoose');
const user = require('./userModel');

const Comments = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user', 
      required:"true" 
    },
    email: {
      type: String,
      required: true,
      unique: true
  },
    commentsOnProfile: {
      type: String,
      required: [true, "Fill the blank to add a comment"]
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('comments', Comments);