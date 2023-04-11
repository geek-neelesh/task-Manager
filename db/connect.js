const mongoose=require("mongoose");

const connectString='mongodb://localhost:27017/'

const connectDb=(url)=>{
    return mongoose.connect(connectString);
}

module.exports =connectDb;