const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence')(mongoose);

const renterSchema = new Schema({
  renterId: Number,
  fName: String,
  lName: String,
  address: String,
  profileImg: String,
  NICnum: String,
  email: { type: String, unique: true }, // Ensure email is unique
  password: String,
  contactNum: String
});

// Apply mongoose-sequence plugin to auto-increment renterId
renterSchema.plugin(mongooseSequence, { inc_field: 'renterId' });

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
