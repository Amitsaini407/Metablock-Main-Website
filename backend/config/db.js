const mongoose = require("mongoose");




async function connectDB(){
    try{
      await mongoose.connect(process.env.DB_URL)
    //   console.log("connected to DB");
    }catch(err){
      console.log(err)
    }

}


module.exports = connectDB