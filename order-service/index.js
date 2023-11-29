const express = require('express');
const {mongodbConnection} = require('./mongodb')
const {OrderApis} = require('./api')
const {CreateChannel} = require('./utils')


const app = express();
const PORT = 8002;
app.use(express.json());


async function startServer(){
    let channel = await CreateChannel();
    await mongodbConnection();
    
    OrderApis(app,channel);
    
    app.listen(PORT,()=>{
        console.log("Order service connected at port 8002")
    })
}


startServer()
