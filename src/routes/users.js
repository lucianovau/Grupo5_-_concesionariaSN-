const express = require('express');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

let router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, '../../public/img/users'));
    },
    filename: (req, file, callback) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        callback(null, fileName);
    }
});

const uploadFile = multer({ storage });

let controller = require('../controllers/usersController');

const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Debes ingresar un formato válido'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confirmarContraseña').notEmpty().withMessage('Tienes que repetir la contraseña'),
    body('terminos').notEmpty().withMessage('Tienes que aceptar los terminos y condiciones'),
    body('foto').custom(((value, { req })=>{
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png', '.gif']

        if(!file){
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtension.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtension.join(', ')}`);
            }
        }
        return true;
        }))
]

router.get("/login", controller.login);
router.get("/register", controller.register);
router.post("/register", uploadFile.single('foto'), validations , controller.processRegister);

module.exports = router