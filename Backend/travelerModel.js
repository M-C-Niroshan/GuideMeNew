const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-sequence')(mongoose);

const travelerSchema = new Schema({
  travelerId: { type: Number, unique: true},
  fName: { type: String, required: true},
  lName: { type: String, required: true},
  profileImage: String,
  NICpassportNum: { type: String, required: true},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true},
});

travelerSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

travelerSchema.plugin(autoIncrement, { inc_field: 'travelerId', start_seq: 3000 });

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;