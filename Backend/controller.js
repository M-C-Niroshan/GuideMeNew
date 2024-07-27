const VehicleRentService = require('./vehicleRentServiseModel.js'); // Ensure this path is correct
const VehicleRentDetails = require('./vehicleRentDetailsModel.js'); // Ensure this path is correct
const GuideServise = require('./guideServiseModel.js'); // Ensure this path is correct
const GuiderBookingDetails = require('./guiderBookingDetailsModel');
const Renter = require('./renterModel'); // Ensure this path is correct
const Guider = require('./guiderModel'); // Ensure this path is correct
const Traveler = require('./travelerModel'); // Ensure this path is correct

const getVehicleRentServices = (req, res, next) => {
  const { pickupLocation, vehicleType } = req.query;

  // Construct the query object based on provided parameters
  let query = {};

  if (pickupLocation) {
    query.avilableLocation = pickupLocation;
  }

  if (vehicleType) {
    query.type = vehicleType;
  }

  VehicleRentService.find(query)
    .select('-_id -__v') // Exclude _id and __v fields
    .then(response => {
      res.json(response); // Return response directly as array
    })
    .catch(error => {
      res.json({ error });
    });
};


// Add similar method for adding VehicleRentService if needed
const addVehicleRentService = (req, res, next) => {
  const vehicleRentService = new VehicleRentService({
    renterId: req.body.renterId,
    vehicleRegNum: req.body.vehicleRegNum,
    type: req.body.type,
    vehicleImage: req.body.vehicleImage,
    rentPrice: req.body.rentPrice,
    avilableLocation: req.body.avilableLocation,
    description: req.body.description,
    rating: req.body.rating,
    vehicleStatus: req.body.vehicleStatus,
  });

  vehicleRentService.save()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json({ error });
    });
};

const getVehicleRentDetails = (req, res, next) => {
    VehicleRentDetails.find()
      .select('-_id -__v') // Exclude _id and __v fields
      .then(response => {
        res.json(response); // Return response directly as array
      })
      .catch(error => {
        res.json({ error });
      });
  };
const addVehicleRentDetails = (req, res, next) => {
    const vehicleRentDetails = new VehicleRentDetails({
      travelerId: req.body.travelerId,
      renterId: req.body.renterId,
      pickupDate: req.body.pickupDate,
      pickupTime: req.body.pickupTime,
      returnDate: req.body.returnDate,
      returnTime: req.body.returnTime
    });
  
    vehicleRentDetails.save()
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        res.json({ error });
      });
  };
  const getGuideServises = (req, res, next) => {
    GuideServise.find()
      .select('-_id -__v') // Exclude _id and __v fields
      .then(response => {
        res.json(response); // Return response directly as array
      })
      .catch(error => {
        res.json({ error });
      });
  };
  
  const addGuideServise = (req, res, next) => {
    const guideServise = new GuideServise({
      guiderId: req.body.guiderId,
      serviceId: req.body.serviceId,
      language: req.body.language,
      price: req.body.price,
      description: req.body.description,
      rating: req.body.rating,
      serviseStatus: req.body.serviseStatus
    });
  
    guideServise.save()
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        res.json({ error });
      });
  };
// Get GuiderBookingDetails
const getGuiderBookingDetails = (req, res, next) => {
    GuiderBookingDetails.find()
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        res.json({ error });
      });
  };
  
  // Add GuiderBookingDetails
  const addGuiderBookingDetails = (req, res, next) => {
    const guiderBookingDetails = new GuiderBookingDetails({
      travelerId: req.body.travelerId,
      serviceId: req.body.serviceId,
      startDate: req.body.startDate,
      startTime: req.body.startTime,
      endDate: req.body.endDate,
      endTime: req.body.endTime
    });
  
    guiderBookingDetails.save()
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        res.json({ error });
      });
  };  
// Get all renters
const getRenters = (req, res, next) => {
  Renter.find()
    .select('-_id -__v') // Exclude _id and __v fields
    .then(response => {
      res.json(response); // Return response directly as array
    })
    .catch(error => {
      res.json({ error });
    });
};

// Add a new renter
const addRenter = async (req, res, next) => {
  try {
    // Check if email already exists
    const existingRenter = await Renter.findOne({ email: req.body.email });
    if (existingRenter) {
      return res.status(400).json({ error: "Account with this email already exists." });
    }

    const renter = new Renter({
      fName: req.body.fName,
      lName: req.body.lName,
      address: req.body.address,
      profileImg: req.body.profileImg,
      NICnum: req.body.NICnum,
      email: req.body.email,
      password: req.body.password,
      contactNum: req.body.contactNum
    });

    const savedRenter = await renter.save();
    res.json(savedRenter);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all guiders
const getGuiders = (req, res, next) => {
  Guider.find()
    .select('-_id -__v') // Exclude _id and __v fields
    .then(response => {
      res.json(response); // Return response directly as array
    })
    .catch(error => {
      res.json({ error });
    });
};

// Add a new guider
const addGuider = async (req, res, next) => {
  try {
    // Check if email already exists
    const existingGuider = await Guider.findOne({ email: req.body.email });
    if (existingGuider) {
      return res.status(400).json({ error: "Account with this email already exists." });
    }

    const guider = new Guider({
      fName: req.body.fName,
      lName: req.body.lName,
      profileImage: req.body.profileImage,
      NICnum: req.body.NICnum,
      email: req.body.email,
      password: req.body.password,
      contactNum: req.body.contactNum,
      age: req.body.age,
      gender: req.body.gender
    });

    const savedGuider = await guider.save();
    res.json(savedGuider);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all travelers
const getTravelers = (req, res, next) => {
  Traveler.find()
    .select('-_id -__v') // Exclude _id and __v fields
    .then(response => {
      res.json(response); // Return response directly as array
    })
    .catch(error => {
      res.json({ error });
    });
};

// Add a new traveler
const addTraveler = async (req, res, next) => {
  try {
    // Check if email already exists
    const existingTraveler = await Traveler.findOne({ email: req.body.email });
    if (existingTraveler) {
      return res.status(400).json({ error: "Account with this email already exists." });
    }

    const traveler = new Traveler({
      fName: req.body.fName,
      lName: req.body.lName,
      profileImage: req.body.profileImage,
      NICpassportNum: req.body.NICpassportNum,  // Changed field name for clarity
      email: req.body.email,
      password: req.body.password,
      contactNumber: req.body.contactNumber
    });

    const savedTraveler = await traveler.save();
    res.json(savedTraveler);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getVehicleRentServices = getVehicleRentServices;
exports.addVehicleRentService = addVehicleRentService;
exports.getVehicleRentDetails = getVehicleRentDetails;
exports.addVehicleRentDetails = addVehicleRentDetails;
exports.getGuideServises = getGuideServises;
exports.addGuideServise = addGuideServise;
exports.getGuiderBookingDetails = getGuiderBookingDetails;
exports.addGuiderBookingDetails = addGuiderBookingDetails;
exports.getRenters = getRenters;
exports.addRenter = addRenter;
exports.getGuiders = getGuiders;
exports.addGuider = addGuider;
exports.getTravelers = getTravelers;
exports.addTraveler = addTraveler;