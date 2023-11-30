const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    user:{
        type:String,
        default:'Anas',
    },
    products:{
        type:Array,
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('ORDER_MODEL', orderSchema);