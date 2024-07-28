const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const guideServiseSchema = new Schema({
  guiderId: { type: Number, required: true },
  serviceId: { type: Number },  // Auto-incremented unique ID
  language: { type: String, required: true },
  price: { type: String, required: true },
  description: String,
  rating: Number,
  serviseStatus: { type: String, required: true }
});

// Plugin to auto-increment the serviceId field
guideServiseSchema.plugin(AutoIncrement, { inc_field: 'serviceId' });

const GuideServise = mongoose.model('GuideServise', guideServiseSchema);
module.exports = GuideServise;
