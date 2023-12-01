const mongoose = require('mongoose');


module.exports =async ()=>{
    await mongoose.connect('mongodb+srv://anasna6005:vF669ZjaGGdnLS8Y@cluster0.wwqw1hv.mongodb.net/order-service')
    console.log("Order service connected to database")
}



