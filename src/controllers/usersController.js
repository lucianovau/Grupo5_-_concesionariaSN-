let path = require("path");
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
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
        };
        const usuarioRegistrado = User.findByField('email', req.body.email);
        if (usuarioRegistrado){
            return res.render(rutaRegistro,{
                errors:{
                    email:{
                        msg: "este email ya esta registrado"
                    }
                },
                oldData: req.body
            })
        };
        let nuevoUsuario = {
            ...req.body,
            foto : req.file.filename,
            password: bcrypt.hashSync(req.body.password,10),
            confirmarPassword: bcrypt.hashSync(req.body.confirmarPassword,10)
} 
         User.create(nuevoUsuario);
    },
    login: (req, res) => {
        let ruta = path.resolve(__dirname, "../views/users/login");
        res.render(ruta);
      },
    
};

module.exports = controller;