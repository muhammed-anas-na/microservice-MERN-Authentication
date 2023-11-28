const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('USER_MODEL', userSchema);