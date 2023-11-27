const express = require("express");
let router = express.Router();

let controller = require("../controllers/CartController.js");

router.get("/", controller.cart);
router.post("/add", controller.add);
router.get('/:id/delete', controller.delete);

module.exports = router;
