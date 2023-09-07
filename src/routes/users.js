const express = require('express');
const multer = require('multer');
const path = require('path');
let router = express.Router();

let controllerUser = require('../controllers/usersController')

module.exports = router