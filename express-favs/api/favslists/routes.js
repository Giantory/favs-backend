const express = require("express");
const router = express.Router();
const ListController = require("./controller");
const {auth} = require("../../../auth")

router.get("/", ListController.getAllLists);
router.get("/:id", ListController.getListById);
router.post("/create", auth,ListController.newList);
router.delete("/deleteAll", ListController.deleteAllLists);
router.delete("/delete/:id", ListController.deleteListById);

module.exports = router;