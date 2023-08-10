const express = require('express');
let router = express.Router();

let controller = require('../controllers/mainController')

router.get('/', controller.home);
router.get('/home', controller.home);
router.get('/login', controller.login);
router.get('/register', controller.registro);
<<<<<<< HEAD
router.get('/productCart', controller.cart)
=======
router.get('/carga-edicion', controller.cargaEdicion);
>>>>>>> c482744c4a2e4a934d9018573cacc494b3603fc6


let productosRutas = require('./productos')
router.get('/productos', productosRutas);
router.get('/detalleProd', productosRutas);

module.exports = router