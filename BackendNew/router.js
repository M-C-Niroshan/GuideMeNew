const express = require('express');
const router = express.Router();
const controller = require('./controller'); // Ensure this path is correct

router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUser); // Note: '/api' prefix is added in server.js
router.post('/updateuser', controller.updateUser);
router.post('/deleteuser', controller.deleteUser);

module.exports = router;
