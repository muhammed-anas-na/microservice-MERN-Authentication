const mongoose = require('mongoose');


module.exports =async ()=>{
    await mongoose.connect('mongodb+srv://anasna6005:vF669ZjaGGdnLS8Y@cluster0.wwqw1hv.mongodb.net/auth-service')
    console.log("Auth service connected to database")
}



