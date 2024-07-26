const User = require('./Model');

// Get all users
const getUsers = (req, res, next) => {
    User.find()
        .then(users => {
            res.json({ success: true, users });
        })
        .catch(error => {
            res.status(500).json({ success: false, error: error.message });
        });
};

// Add a new user
const addUser = (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        nic: req.body.nic,
        mobile: req.body.mobile,
    });

    user.save()
        .then(savedUser => {
            res.json({ success: true, user: savedUser });
        })
        .catch(error => {
            res.status(500).json({ success: false, error: error.message });
        });
};

// Update an existing user
const updateUser = (req, res, next) => {
    const { id, firstName, lastName, email, password, nic, mobile } = req.body;

    User.updateOne({ _id: id }, { $set: { firstName, lastName, email, password, nic, mobile } })
        .then(response => {
            if (response.nModified > 0) {
                res.json({ success: true, message: 'User updated successfully' });
            } else {
                res.status(404).json({ success: false, message: 'User not found or no changes made' });
            }
        })
        .catch(error => {
            res.status(500).json({ success: false, error: error.message });
        });
};

// Delete a user
const deleteUser = (req, res, next) => {
    const id = req.body.id;

    User.deleteOne({ _id: id })
        .then(response => {
            if (response.deletedCount > 0) {
                res.json({ success: true, message: 'User deleted successfully' });
            } else {
                res.status(404).json({ success: false, message: 'User not found' });
            }
        })
        .catch(error => {
            res.status(500).json({ success: false, error: error.message });
        });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
