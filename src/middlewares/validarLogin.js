const { body } = require('express-validator')
const arrData = require('../data/users.json');
const path = require('path');
const fs = require('fs');
const { hashSync } = require('bcryptjs');
const db = require('../../database/models')

const pathFile = path.join(__dirname, '..', 'data', 'users.json');

const validateLogin = [
    body("email").notEmpty().withMessage("Debes ingresar un email")
        .isEmail().withMessage('Debes ingresar un formato valido').bail()
        .custom(async (value) => {
        // Verifica si el email existe en la base de datos
        const user = await db.User.findOne({ email: value });
        if (!user) {
        throw new Error('El email no está registrado');
        }
        return true;
    }),
    body("password").notEmpty().withMessage("Debes ingresar la contraseña")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("las contraseñas no coinciden");
            }
            return true;
        }),
    body('sesion').notEmpty().withMessage('Debes mantener iniciada la sesion')
]

module.exports = validateLogin;