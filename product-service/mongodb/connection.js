const mongoose = require('mongoose');

module.exports =async ()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/product-service')
    console.log("Product service connected to database")
}



