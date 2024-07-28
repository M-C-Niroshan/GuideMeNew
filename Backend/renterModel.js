const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-sequence')(mongoose);

const renterSchema = new Schema({
  renterId: { type: Number, unique: true },
  fName: { type: String, required: true},
  lName: { type: String, required: true},
  address: { type: String, required: true},

  profileImage: String,

  NICnum: { type: String, required: true},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  contactNum: { type: String, required: true},
});

renterSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

renterSchema.plugin(autoIncrement, { inc_field: 'renterId', start_seq: 1000 });

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
