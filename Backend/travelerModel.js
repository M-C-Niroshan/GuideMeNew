const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence')(mongoose);

const travelerSchema = new Schema({
  travelerId: Number,
  fName: String,
  lName: String,
  profileImage: String,
  NICpassportNum: String,  // Changed field name for clarity
  email: { type: String, unique: true }, // Ensure email is unique
  password: String,
  contactNumber: String
});

// Apply mongoose-sequence plugin to auto-increment travelerId
travelerSchema.plugin(mongooseSequence, { inc_field: 'travelerId' });

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;
