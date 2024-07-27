const Traveler = require('./travelerModel');
const Renter = require('./renterModel');
const Guider = require('./guiderModel');

const checkEmailExists = async (email) => {
  const traveler = await Traveler.findOne({ email });
  if (traveler) return true;

  const renter = await Renter.findOne({ email });
  if (renter) return true;

  const guider = await Guider.findOne({ email });
  if (guider) return true;

  return false;
};

module.exports = checkEmailExists;
