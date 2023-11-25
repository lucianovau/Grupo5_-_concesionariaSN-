const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../../controllers/api/productController');

router.get('/', controller.count);
router.get('/:id', controller.detail);
router.get('/:id/img', express.static(path.resolve(__dirname, './public/img/productImg')), controller.img)
router.get('/', controller.obtenerProductos);

module.exports = router;