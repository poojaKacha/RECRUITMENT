const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    }
})
var USER = mongoose.model('users', userSchema)
module.exports = USER