// vehicleRentDetailsModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleRentDetailsSchema = new Schema({
  travelerId: Number,
  renterId: Number,
  rentServiceId: Number, // Add this line
  pickupDate: Date,
  pickupTime: String,
  returnDate: Date,
  returnTime: String
});

const VehicleRentDetails = mongoose.model('VehicleRentDetails', vehicleRentDetailsSchema);
module.exports = VehicleRentDetails;
