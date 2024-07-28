const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const vehicleRentServiseSchema = new Schema({
  vehicleRentServiceId: Number,  // Auto-incremented unique ID
  renterId: { type: Number, required: true },
  vehicleRegNum: { type: String, required: true },
  type: { type: String, required: true },
  vehicleImage: String,
  rentPrice: { type: String, required: true },
  avilableLocation: { type: String, required: true },
  description: String,
  rating: Number,
  vehicleStatus: { type: String, required: true }
});

vehicleRentServiseSchema.plugin(AutoIncrement, { inc_field: 'vehicleRentServiceId' });

const VehicleRentServise = mongoose.model('VehicleRentServise', vehicleRentServiseSchema);
module.exports = VehicleRentServise;
