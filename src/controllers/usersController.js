let path = require("path");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const session = require('express-session')

const profileRoute = path.resolve(__dirname, "../views/users/profile"); 
const rutaRegistro = path.resolve(__dirname, "../views/users/register");
let rutaproducto = true;

const controller = {
    register: (req, res) => {
        res.render(rutaRegistro, { rutaproducto });
    },


    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            res.render(rutaRegistro, { 
                errors: resultValidation.mapped(),
                oldData: req.body,
                rutaproducto
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
        return res.redirect("/");
    },
    login: (req, res) => {
        let ruta = path.resolve(__dirname, "../views/users/login");
        res.render(ruta, {rutaproducto});
      },
    
    loginProcess: (req,res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            res.render(path.resolve(__dirname, "../views/users/login"), { 
                errors: resultValidation.mapped(),
                oldData: req.body,
                rutaproducto
            })
        };

        let userToLogin = User.findByField("email", req.body.email);

        if(userToLogin) {
        let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
        if(passwordOk) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin; 
            if (req.body.sesion) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
            }
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
        console.log( req.session.userLogged)
        
        return res.render(profileRoute, {rutaproducto,
            user: req.session.userLogged
        });
    },
    
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
};


module.exports = controller;