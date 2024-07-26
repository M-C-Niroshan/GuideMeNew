// travelerModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelerSchema = new Schema({
  travelerId: Number,
  fName: String,
  lName: String,
  profileImage: String,
  NICpassportNum: String,  // Changed field name for clarity
  email: String,
  password: String,
  contactNumber: String
});

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;
