const mongoose  = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const truckSchema = new mongoose.Schema({
 
  firstname: {
    type:String,
    trim:true, 

  },
  lastname: {
    type:String,
    true:true,
  },
  username:{
    type: String,
    trim: true,
    unique:true,
  },
  email: {
    type:String,
    unique:true 

  },
  role: {
    type:String,
    trim: true,
  },
  phone: {
    type:String,
    trim:true,

  },
  password:{
    type: String,
    trim: true,
  }
 
 

});
  module.exports = mongoose.model('Truck',truckSchema);