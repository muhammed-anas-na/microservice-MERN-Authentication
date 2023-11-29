const mongoose = require('mongoose');


module.exports =async ()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/order-service')
    console.log("Order service connected to database")
}



