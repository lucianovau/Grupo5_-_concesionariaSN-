const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../../controllers/api/userController');

router.get('/', controller.count);
router.get('/:id', controller.detail);
router.get('/:id/img', express.static(path.resolve(__dirname,  './public/img/users')), controller.img)


module.exports = router;