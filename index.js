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
const lists = require('./express-favs/api/lists/routes');
const favs = require('./express-favs/api/favs/routes');
const users = require('./express-favs/api/users/routes');

app.use('/api/lists', lists);
app.use('/api/favs', favs);
app.use('/api/users', users);


