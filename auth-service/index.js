const express = require('express');
const {mongodbConnection , userModel} = require('./mongodb')

const app = express();
const PORT = 8001;
app.use(express.json());

app.get('/',async(req,res)=>{
    const data = await userModel.find({})
    console.log(data)
})

mongodbConnection();
app.listen(PORT,()=>{
    console.log("Auth service connected at port 8001")
})
