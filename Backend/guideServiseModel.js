const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guideServiseSchema = new Schema({
  guiderId: Number,
  serviceId: Number,
  language: String,
  price: String,
  description: String,
  rating: Number,
  serviseStatus: String
});

const GuideServise = mongoose.model('GuideServise', guideServiseSchema);
module.exports = GuideServise;
