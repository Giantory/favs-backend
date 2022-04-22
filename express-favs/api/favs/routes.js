const express = require("express");
const router = express.Router();
const FavsController = require("./controller");
const {auth} = require("../../../auth")


router.post("/:id",auth, FavsController.newFav);

module.exports = router;