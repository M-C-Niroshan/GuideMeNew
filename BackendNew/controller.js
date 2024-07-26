const User = require('./model');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Or configure as needed

const getUsers = (req, res, next) => {
  User.find()
    .then(response => {
      res.json({ users: response });
    })
    .catch(error => {
      res.json({ error });
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    nic: req.body.nic,
    mobile: req.body.mobile,
    gender: req.body.gender,
    image: req.file ? req.file.filename : null, // Save the file name if uploaded
  });

  user.save()
    .then(response => {
      res.json({ user: response });
    })
    .catch(error => {
      res.json({ error });
    });
};

const updateUser = (req, res, next) => {
  const { id, firstName, lastName, email, password, nic, mobile } = req.body;
  const updateData = { firstName, lastName, email, password, nic, mobile };

  if (req.file) {
    updateData.image = req.file.filename; // Update image if new one is uploaded
  }

  User.updateOne({ _id: id }, { $set: updateData })
    .then(response => {
      res.json({ user: response });
    })
    .catch(error => {
      res.json({ error });
    });
};

const deleteUser = (req, res, next) => {
  const { id } = req.body;

  User.deleteOne({ _id: id })
    .then(response => {
      res.json({ user: response });
    })
    .catch(error => {
      res.json({ error });
    });
};

exports.getUsers = getUsers;
exports.addUser = [upload.single('image'), addUser]; // Using multer middleware
exports.updateUser = [upload.single('image'), updateUser]; // Using multer middleware
exports.deleteUser = deleteUser;
