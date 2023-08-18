const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL =process.env.CONNECTIONS_STRING;


mongoose.connect(MONGO_URL,{
   
})
.then(()=>{
    console.log("Mongoo Db connected successfully")

}).catch((err)=>{
 console.log("Mongoose connection error",err);
});