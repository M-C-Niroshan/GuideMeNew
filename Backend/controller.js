const bcrypt = require('bcryptjs'); // Add bcrypt for password hashing
const VehicleRentService = require('./vehicleRentServiseModel.js'); // Ensure this path is correct
const VehicleRentDetails = require('./vehicleRentDetailsModel.js'); // Ensure this path is correct
const GuideServise = require('./guideServiseModel.js'); // Ensure this path is correct
const GuiderBookingDetails = require('./guiderBookingDetailsModel');
const Renter = require('./renterModel'); // Ensure this path is correct
const Guider = require('./guiderModel'); // Ensure this path is correct
const Traveler = require('./travelerModel'); // Ensure this path is correct

// Utility function to check if an email exists in any role
const checkEmailExists = async (email) => {
  const traveler = await Traveler.findOne({ email });
  if (traveler) return true;

  const renter = await Renter.findOne({ email });
  if (renter) return true;

  const guider = await Guider.findOne({ email });
  if (guider) return true;

  return false;
};

// Get all vehicle rent services
const getVehicleRentServices = async (req, res, next) => {
  const { pickupLocation, vehicleType } = req.query;

  // Construct the query object based on provided parameters
  let query = {};

  if (pickupLocation) {
    query.avilableLocation = pickupLocation;
  }

  if (vehicleType) {
    query.type = vehicleType;
  }

  try {
    // Find vehicle rent services based on query
    const services = await VehicleRentService.find(query)
      .where('vehicleStatus').equals('available')
      .exec();

    // Fetch renter details for each service and reshape the response
    const servicesWithRenterDetails = await Promise.all(services.map(async (service) => {
      const renter = await Renter.findOne({ renterId: service.renterId }).exec();
      return {
        renterId: service.renterId,
        vehicleRegNum: service.vehicleRegNum,
        type: service.type,
        vehicleImage: service.vehicleImage,
        rentPrice: service.rentPrice,
        avilableLocation: service.avilableLocation,
        description: service.description,
        rating: service.rating,
        name: renter ? `${renter.fName} ${renter.lName}` : null,
        profileImg: renter ? renter.profileImg : null,
        email: renter ? renter.email : null,
        contactNum: renter ? renter.contactNum : null
      };
    }));

    res.json(servicesWithRenterDetails);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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

// Get vehicle rent details
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

// Add vehicle rent details
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

// Get all guide services
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

// Add a new guide service
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

// Get guider booking details
const getGuiderBookingDetails = (req, res, next) => {
  GuiderBookingDetails.find()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json({ error });
    });
};

// Add guider booking details
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
    const emailExists = await checkEmailExists(req.body.email);
    if (emailExists) {
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
    const emailExists = await checkEmailExists(req.body.email);
    if (emailExists) {
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
    const emailExists = await checkEmailExists(req.body.email);
    if (emailExists) {
      return res.status(400).json({ error: "Account with this email already exists." });
    }

    const traveler = new Traveler({
      fName: req.body.fName,
      lName: req.body.lName,
      profileImage: req.body.profileImage,
      NICpassportNum: req.body.NICpassportNum,
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

// Login function
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in any of the collections
    let user = await Renter.findOne({ email });
    if (!user) user = await Guider.findOne({ email });
    if (!user) user = await Traveler.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Exclude password from the response
    const { password: _, ...userDetails } = user.toObject();
    res.json(userDetails);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getVehicleRentServices,
  addVehicleRentService,
  getVehicleRentDetails,
  addVehicleRentDetails,
  getGuideServises,
  addGuideServise,
  getGuiderBookingDetails,
  addGuiderBookingDetails,
  getRenters,
  addRenter,
  getGuiders,
  addGuider,
  getTravelers,
  addTraveler,
  loginUser
};