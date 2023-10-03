const { body } = require('express-validator')
const arrData = require('../data/users.json');
const path = require('path');
const fs = require('fs');
const { hashSync } = require('bcryptjs');

const pathFile = path.join(__dirname, '..', 'data', 'users.json');

const validateLogin = [
    body("email").notEmpty().withMessage("Debes ingresar un email")
        .isEmail().withMessage('Debes ingresar un formato valido').bail(),
    body("password").notEmpty().withMessage("Debes ingresar la contraseña"),
    body('sesion').notEmpty().withMessage('Debes mantener iniciada la sesion')
]

module.exports = validateLogin;