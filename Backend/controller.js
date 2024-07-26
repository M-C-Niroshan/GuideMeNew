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
const addRenter = (req, res, next) => {
  const renter = new Renter({
    renterId: req.body.renterId,
    fName: req.body.fName,
    lName: req.body.lName,
    address: req.body.address,
    profileImg: req.body.profileImg,
    NICnum: req.body.NICnum,
    email: req.body.email,
    password: req.body.password,
    contactNum: req.body.contactNum
  });

  renter.save()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json({ error });
    });
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
const addGuider = (req, res, next) => {
  const guider = new Guider({
    guiderId: req.body.guiderId,
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

  guider.save()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json({ error });
    });
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
const addTraveler = (req, res, next) => {
  const traveler = new Traveler({
    travelerId: req.body.travelerId,
    fName: req.body.fName,
    lName: req.body.lName,
    profileImage: req.body.profileImage,
    NICpassportNum: req.body.NICpassportNum,  // Changed field name for clarity
    email: req.body.email,
    password: req.body.password,
    contactNumber: req.body.contactNumber
  });

  traveler.save()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json({ error });
    });
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