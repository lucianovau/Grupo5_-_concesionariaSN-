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
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confirmarPassword').notEmpty().withMessage('Tienes que repetir la contraseña')
        .bail().custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("las contraseñas no coinciden");
        }
        return true;
    }),
    body('terminos').notEmpty().withMessage('Tienes que aceptar los terminos y condiciones'),
    body('foto').custom(((value, { req })=>{
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png', '.gif', '.jpeg']

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

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware= require('../middlewares/authMiddleware');

router.get("/login", controller.login);
router.post("/login", controller.loginProcess);
router.get("/register", guestMiddleware, controller.register);
router.post("/register", uploadFile.single('foto'), validations , controller.processRegister);
router.get("/profile", controller.profile);
router.get("/logout", controller.logout);


module.exports = router