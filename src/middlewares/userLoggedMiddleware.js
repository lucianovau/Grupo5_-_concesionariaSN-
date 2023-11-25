// const User = require('../../database/models/User'); 

// async function userLoggedMiddleware(req, res, next) {
//     res.locals.isLogged = false;

//     // Verificar si hay un correo electrónico en las cookies
//     const emailInCookie = req.cookies.userEmail;

//     if (emailInCookie) {
//         try {
//             // Intentar encontrar al usuario en la base de datos por correo electrónico
//             const userFromCookie = await User.findByField('email', emailInCookie);

//             if (userFromCookie) {
//                 // Si se encuentra el usuario, almacenar la información en la sesión
//                 req.session.userLogged = userFromCookie;
//                 res.locals.isLogged = true;
//                 res.locals.userLogged = userFromCookie;
//             }
//         } catch (error) {
//             console.error('Error al buscar al usuario en la base de datos:', error);
//         }
//     }

//     next();
// }

// module.exports = userLoggedMiddleware;