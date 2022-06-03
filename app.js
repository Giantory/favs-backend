
const express = require('express');


// Express Setup
const app = express();
app.use(express.json());

// Routes
const favlists = require('./express-favs/api/favslists/routes');
const favs = require('./express-favs/api/favs/routes');
const users = require('./express-favs/api/users/routes');

app.use('/api/favs', favlists);
app.use('/api/favs', favs);
app.use('/api/', users);


module.exports = app