const express = require('express')
const path = require('path');

let router = express.Router();
let controller = require('../controllers/usersController');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware= require('../middlewares/authMiddleware');
const validationRegister = require('../middlewares/validarRegister');
const validationLogin = require('../middlewares/validarLogin');
const uploadFile = require('../middlewares/multerUsers')

router.get("/login", controller.login);
router.post("/login", validationLogin ,controller.loginProcess);
router.get("/register", guestMiddleware, controller.register);
router.post("/register", uploadFile.single('foto'), validationRegister , controller.processRegister);
router.get("/profile", controller.profile);
router.get("/logout", controller.logout);


module.exports = router