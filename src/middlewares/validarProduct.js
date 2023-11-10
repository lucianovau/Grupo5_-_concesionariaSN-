const express = require('express');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

const validationProduct = [
    body('name').notEmpty().withMessage('El nombre debe tener al menos 5 caracteres').isLength({ min: 5 }),
    body('descripcion').notEmpty().withMessage('la descripcion debe tener al menos 20 caracteres').isLength({ min: 20 }),
    body('imageProduct').custom(((value, { req })=>{
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

module.exports = validationProduct