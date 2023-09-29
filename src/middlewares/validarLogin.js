const { body, validationResult } = require('express-validator')
const arrData = require('../data/users.json');
const path = require('path');
const fs = require('fs');
const { hashSync } = require('bcryptjs');

const pathFile = path.join(__dirname, '..', 'data', 'users.json');

const validateLogin = [
    body("email").notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage('Debes ingresar un formato valido'),
    body("password").notEmpty().withMessage("Debes ingresar la contraseña"),
    body('sesion').notEmpty().withMessage('Debes mantener iniciada la sesion')
]

module.exports = validateLogin