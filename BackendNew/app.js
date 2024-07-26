const express = require('express');
const app = express();
const cors = require('cors');

const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers((err, users) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(users);
    });
});

app.post('/api/createuser', (req, res) => {
    controller.addUser(req.body, (err, user) => {
        if (err) {
            return res.status(500).json({error: 'Error creating user'});
        }
        res.status(201).json(user);
    });
});

app.post('/updateuser', (req, res) => {
    controller.updateUser(req.body, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(user);
    });
});

app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.body, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(user);
    });
});

module.exports = app;

