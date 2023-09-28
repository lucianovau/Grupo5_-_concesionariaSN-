const express = require('express');
const path = require('path');
let router = express.Router();


let controllerProductos = require('../controllers/productosController')

const upload = require('../middlewares/multerProducts')

router.get('/', controllerProductos.productos);
router.get('/create', controllerProductos.create);
router.post('/create', upload.array('imageProduct', 6), controllerProductos.store);

module.exports = router