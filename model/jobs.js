const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobsSchema = new Schema({
    jobs_tittle: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    }
    ,
    experience: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['PENDING', 'DONE'],
        default: 'PENDING'

    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})
const JOBS = mongoose.model('jobs', jobsSchema)
module.exports = JOBS
