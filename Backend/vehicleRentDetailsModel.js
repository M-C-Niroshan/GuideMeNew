// vehicleRentDetailsModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleRentDetailsSchema = new Schema({
  travelerId: Number,
  renterId: Number,
  vehicleRentServiceId: Number, // Add this line
  pickupDate: Date,
  pickupTime: String,
  handoverDate: Date,  //
  handoverTime: String  //
});

const VehicleRentDetails = mongoose.model('VehicleRentDetails', vehicleRentDetailsSchema);
module.exports = VehicleRentDetails;
