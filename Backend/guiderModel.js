// guiderModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guiderSchema = new Schema({
  guiderId: Number,
  fName: String,
  lName: String,
  profileImage: String,
  NICnum: String,
  email: String,
  password: String,
  contactNum: String,
  age: Number,
  gender: String
});

const Guider = mongoose.model('Guider', guiderSchema);

module.exports = Guider;
