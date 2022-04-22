const app = require('./app')
const mongoose = require("mongoose");

// Server Setup

const PORT = 3001

mongoose.connect(
    `mongodb://localhost:27017/favsDB`
)
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});





