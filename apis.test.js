const request = require("supertest");
const mongoose = require("mongoose");
const app = require("./app");

const PORT = 3001;

mongoose.connect(`mongodb://localhost:27017/favsDB`);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
//do some test...