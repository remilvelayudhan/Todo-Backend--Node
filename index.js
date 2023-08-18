const express = require('express');
const bodyParser =require('body-parser');
const app =express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const todoRouter = require('./Routes/todoRouter');
require('dotenv').config();
require('./db');
app.use(bodyParser.json());

app.get('/',async (req,res)=>{
    res.json({
        message:"The Api is working fine"
    })
})
app.use('/todo',todoRouter);
app.use(cors({
    origin: 'https://localhost:8000'
}))
app.listen(PORT,()=>{
    console.log("server listening on port",PORT);
})