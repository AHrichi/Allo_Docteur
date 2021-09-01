const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userShema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  specialité: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  password: { type: String, required: true },
  adress: { type: Array  },
  ville: { type: String ,required:true}, 
  profession:{type:String,required:true},
  isAdmin:{type:Boolean,default:false},
  image:{type:String},
  Approved:{type:Boolean,default:false}
  
});

module.exports = user = mongoose.model("user", userShema);
