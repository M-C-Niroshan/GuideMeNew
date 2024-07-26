// guiderBookingDetailsModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guiderBookingDetailsSchema = new Schema({
  travelerId: Number,
  serviceId: Number,
  startDate: Date,
  startTime: String,
  endDate: Date,
  endTime: String
});

const GuiderBookingDetails = mongoose.model('GuiderBookingDetails', guiderBookingDetailsSchema);
module.exports = GuiderBookingDetails;
