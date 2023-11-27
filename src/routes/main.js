const express = require("express");
let router = express.Router();

let controller = require("../controllers/mainController");

router.get("/", controller.home);
router.get("/home", controller.home);

module.exports = router;
