// vehicleRentServiseModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleRentServiseSchema = new Schema({
  renterId: Number,
  vehicleRegNum: String,
  type: String,
  vehicleImage: String,
  rentPrice: String,
  avilableLocation: String,
  description: String,
  rating: Number,
  vehicleStatus: String
});

const VehicleRentServise = mongoose.model('VehicleRentServise', vehicleRentServiseSchema);
module.exports = VehicleRentServise;
