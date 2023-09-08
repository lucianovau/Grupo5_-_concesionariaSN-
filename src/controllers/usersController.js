let path = require("path");
const { validationResult } = require('express-validator')

const User = require('../models/user');

const rutaRegistro = path.resolve(__dirname, "../views/users/register");

const controller = {
    register: (req, res) => { res.render(rutaRegistro); },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            res.render(rutaRegistro, { 
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        // User.create(req.body);
    },
    login: (req, res) => {
        let ruta = path.resolve(__dirname, "../views/users/login");
        res.render(ruta);
      },
    
};

module.exports = controller;