const express = require('express');

const app = express();
const PORT = 8001;

app.listen(PORT,()=>{
    console.log("Auth service connected at port 8001")
})
