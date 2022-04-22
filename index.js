const express = require('express');
const mongoose = require("mongoose");

// Server Setup
const PORT = 3001;

// Express Setup
const app = express();
app.use(express.json());

mongoose.connect(
    `mongodb://localhost:27017/favsDB`
)
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

// Routes
const favlists = require('./express-favs/api/favslists/routes');
const favs = require('./express-favs/api/favs/routes');
const users = require('./express-favs/api/users/routes');

app.use('/api/favslists', favlists);
app.use('/api/favs', favs);
app.use('/api/users', users);


module.exports = app

