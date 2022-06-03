const app = require('./app')
const mongoose = require("mongoose");

// Server Setup

const PORT = 3001
MONGO_URI = `mongodb://localhost:27017/favsDB`

mongoose.connect(
    MONGO_URI
)
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});





