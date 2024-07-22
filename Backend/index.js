const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./Models/db'); 
const AuthRouter = require('./Routes/AuthRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
    console.log('Incoming request:', req.method, req.path);
    console.log('Request body:', req.body);
    next();
});

app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
