const express = require('express');
const multer = require('multer');
const path = require('path');
let router = express.Router();


let controllerProductos = require('../controllers/productosController')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/productStock'));
    },
    filename: (req, file, callback) => {

        const newFilename = `${Date.now()}_img${path.extname(file.originalname)}`;
        callback(null, newFilename);
    }
});

const upload = multer({ storage });

router.get('/', controllerProductos.productos);
router.get('/create', controllerProductos.create);
router.post('/create', upload.single('imageProduct'),controllerProductos.store);

module.exports = router