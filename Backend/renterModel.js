// renterModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const renterSchema = new Schema({
  renterId: Number,
  fName: String,
  lName: String,
  address: String,
  profileImg: String,
  NICnum: String,
  email: String,
  password: String,
  contactNum: String
});

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
