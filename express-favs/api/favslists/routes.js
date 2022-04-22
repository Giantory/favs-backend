const express = require("express");
const router = express.Router();
const ListController = require("./controller");
const {auth} = require("../../../auth")

router.get("/", auth,ListController.getAllLists);
router.get("/:id", auth,ListController.getListById);
router.post("/create", auth,ListController.newList);
router.delete("/delete/:id", ListController.deleteListById);

module.exports = router;