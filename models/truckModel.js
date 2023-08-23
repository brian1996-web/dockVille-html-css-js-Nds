
 const mongoose = require("mongoose");

 const TruckSchema = new mongoose.Schema({

    firstname:{
    type:String,
      trim:true,
  },
   Lastname:{
    type:String,
      trim:true,
  },
  Age:{
    type:String,
      trim:true,
  },
  Email:{
    type:String,
      unique:true 
  },
  Telephone:{
    type:String,
      trim:true,
  },
  Gender:{
    type:String,
      trim:true,
  },
  ArrivalTime:{
    type:String,
    unique:true 
  },
  ExitTime:{
    type:String,
    unique:true 
  },
   ReceiptNumber:{
    type:String,
    unique:true 
   },
  Amount:{
    type:String,
    trim:true,
  }

});


module.exports = mongoose.model("Truck",TruckSchema);

