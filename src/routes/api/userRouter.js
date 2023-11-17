const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/userController');

router.get('/', controller.count);
router.get('/:id', controller.detail);


module.exports = router;