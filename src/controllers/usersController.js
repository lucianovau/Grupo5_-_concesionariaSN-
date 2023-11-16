let path = require("path");
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const session = require('express-session')

const db = require('../../database/models');

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
        }else{
            let usuarioRegistrado 
            db.User.findOne({ where: { email: req.body.email}})
                .then((resultados)=>{
                    usuarioRegistrado = resultados
                })
                .catch((err)=>{
                    console.log(err)
                })
            if (usuarioRegistrado){
                return res.render(rutaRegistro,{
                    errors:{
                        email:{
                            msg: "este email ya esta registrado"
                        }
                    },
                    oldData: req.body
                })
            }else{
                db.User.create({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email: req.body.email, 
                    terminos: req.body.terminos,
                    foto: '/img/users/' + req.file.filename,
                    password: bcryptjs.hashSync(req.body.password,10),
                })
                    .then(()=>{
                        return res.redirect("/");
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            }
    },
    login: (req, res) => {
        let ruta = path.resolve(__dirname, "../views/users/login");
        res.render(ruta, {rutaproducto});
      },
    
    loginProcess: (req, res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            return res.render(path.resolve(__dirname, "../views/users/login"), { 
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    rutaproducto
            })
        };

        let userToLogin 
        let passwordOk
        db.User.findOne({ where: { email: req.body.email}})
            .then((resultados)=>{
                userToLogin = resultados
                if (userToLogin) {
                    passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
                    return passwordOk
                } else {
                    return res.render(path.resolve(__dirname, "../views/users/login"),{
                    errors: { 
                    email: {msg:"Error al encontrar el usuario"}
                }});
                }
            })
            .then((passwordOk)=>{
                if(passwordOk) {
                    req.session.userLogged = userToLogin; 
                    if (req.body.sesion) {
                        res.cookie('userEmail', req.body.email, { maxAge: ((1000 * 60) * 60) * 24})
                    }
                    return res.redirect("/user/profile");
                } else {
                    return res.render(path.resolve(__dirname, "../views/users/login"),{
                    errors: {
                        email: {msg: "Las credenciales son invalidas"}
                    }
                });
                }
            })
            .catch((err)=>{
                console.log(err)
            })

        
        },

    profile: (req, res) => {
        let logged = true;
        
        return res.render(profileRoute, {rutaproducto,
            user: req.session.userLogged,
            logged
        });
    },
    
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    guest: (req, res) => {
        return res.redirect('/');
    }
    
};


module.exports = controller;