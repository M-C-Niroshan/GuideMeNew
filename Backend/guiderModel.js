const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-sequence')(mongoose);

const guiderSchema = new Schema({
  fName: { type: String, required: true},
  lName: { type: String, required: true},
  profileImage: { type: String, required: true},
  NICnum: { type: String, required: true},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  contactNum: { type: String, required: true},
  age: Number,
  gender: String
});

guiderSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

guiderSchema.plugin(autoIncrement, { inc_field: 'guiderId', start_seq: 2000 });

const Guider = mongoose.model('Guider', guiderSchema);

module.exports = Guider;
