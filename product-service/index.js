const express = require('express');
const {mongodbConnection , userModel} = require('./mongodb')
const {ProductApis} = require('./api')
const {CreateChannel} = require('./utils')


const app = express();
const PORT = 8003;
app.use(express.json());


async function startServer(){
    let channel = await CreateChannel();
    await mongodbConnection();
    
    ProductApis(app,channel);
    
    app.listen(PORT,()=>{
        console.log("Product service connected at port 8003")
    })
}

startServer()