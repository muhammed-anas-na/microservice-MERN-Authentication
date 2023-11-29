const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('ORDER_MODEL', orderSchema);