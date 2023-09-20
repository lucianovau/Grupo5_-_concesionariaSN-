let path = require("path");
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const profileRoute = path.resolve(__dirname, "../views/users/profile"); 


const rutaRegistro = path.resolve(__dirname, "../views/users/register");
let rutaproducto = true;

const controller = {
    register: (req, res) => { res.render(rutaRegistro, {rutaproducto}); },


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
        res.render(ruta, {rutaproducto});
      },
    
    loginProcess: (req,res) => {
        let userToLogin = User.findByField("email", req.body.email);
        if(userToLogin) {
        let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
        if(passwordOk) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            return res.redirect(profileRoute);
          }
          return res.render("login",{
            errors: {
                email: {msg: "Las credenciales son invalidas"}
            }
          });
          }
        return res.redirect("/user/profile");
      },

    profile: (req, res) => {
        console.log("Estas en profile");
        console.log(req.session);
        return res.render(profileRoute, {rutaproducto});
    }   
};


module.exports = controller;