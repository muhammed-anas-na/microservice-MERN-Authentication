const mongoose = require('mongoose');


module.exports =async ()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/auth-service')
    console.log("Auth service connected to database")
}



