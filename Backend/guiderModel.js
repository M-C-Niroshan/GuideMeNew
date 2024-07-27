const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence')(mongoose);

const guiderSchema = new Schema({
  guiderId: Number,
  fName: String,
  lName: String,
  profileImage: String,
  NICnum: String,
  email: { type: String, unique: true }, // Ensure email is unique
  password: String,
  contactNum: String,
  age: Number,
  gender: String
});

// Apply mongoose-sequence plugin to auto-increment guiderId
guiderSchema.plugin(mongooseSequence, { inc_field: 'guiderId' });

const Guider = mongoose.model('Guider', guiderSchema);

module.exports = Guider;
