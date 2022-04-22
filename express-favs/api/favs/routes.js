const express = require("express");
const router = express.Router();
const FavsController = require("./controller");


router.post("/:id", FavsController.newFav);

module.exports = router;