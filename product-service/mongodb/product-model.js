const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('PRODUCT_MODEL', ProductSchema);