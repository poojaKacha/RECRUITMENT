const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interviewSchema = new Schema({
    date: {
        type: Date,
        required:true
    },
    startTIME: {
        type: String,
        required:true
    },
    endTIME: {
        type: String,
        required:true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
                      

})
const INTERVIEW = mongoose.model('interview', interviewSchema)
module.exports = INTERVIEW