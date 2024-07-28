// guiderBookingDetailsModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guiderBookingDetailsSchema = new Schema({
  travelerId: Number,
  guiderId: Number, // New field
  serviceId: Number,
  reservationDate: Date, // Replaces startDate
  reservationTime: String // Replaces startTime
});

const GuiderBookingDetails = mongoose.model('GuiderBookingDetails', guiderBookingDetailsSchema);
module.exports = GuiderBookingDetails;
