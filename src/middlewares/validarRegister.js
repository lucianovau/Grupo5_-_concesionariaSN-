const express = require('express');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

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

module.exports = validations