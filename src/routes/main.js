const express = require("express");
let router = express.Router();

let controller = require("../controllers/mainController");

router.get("/", controller.home);
router.get("/home", controller.home);
router.get("/login", controller.login);
router.get("/register", controller.registro);
router.get("/productCart", controller.cart);

module.exports = router;
