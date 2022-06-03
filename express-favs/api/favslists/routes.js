const express = require("express");
const router = express.Router();
const ListController = require("./controller");
const {auth} = require("../../../auth")

router.get("/", auth,ListController.getAllLists);
router.get("/:id", auth,ListController.getListById);
router.post("/", auth,ListController.newList);
router.delete("/:id",auth, ListController.deleteListById);

module.exports = router;