const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feedbackSchema = new Schema({
   
    review: {
        type: String,
        required:true
    },
    star: {
        type: String,
        required:true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:true
    }
})
const FEEDBACK = mongoose.model('feedback', feedbackSchema)
module.exports =  FEEDBACK