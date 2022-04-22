const express = require("express");
const router = express.Router();
const FavsController = require("./controller");

router.get("/", FavsController.getAllFavs);
router.post("/:id", FavsController.newFav);
router.delete("/deleteAll", FavsController.deleteAllFavs);
router.delete("/delete/:id", FavsController.deleteFavById);

module.exports = router;