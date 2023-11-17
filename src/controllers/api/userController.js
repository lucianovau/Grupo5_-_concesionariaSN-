const db = require('../../../database/models');
const sequelize = db.sequelize;

const controller = {
    'count': (req, res) => {
        let count, users
        db.User.count()
            .then((totalUsers) => {
                count = totalUsers;
                return db.User.findAll();
            })
        .then((userList) => {
                users = userList.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: `/api/users/${user.id}`
                }));

                // Crear el objeto literal de respuesta
                const response = {
                    count,
                    users
                };

                // Enviar la respuesta al cliente
                res.json(response);
            })
            .catch((error) => {
                console.error('Error al obtener la información de usuarios:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            })
    },
    'detail': (req, res) => { 
        let id, nombre, apellido, email, foto
        db.User.findByPk(req.params.id)
            .then(
                (user) => {
                    id = user.id
                    nombre = user.nombre
                    apellido = user.apellido
                    email = user.email
                    foto = user.foto

                    const result = {
                        id,
                        nombre,
                        apellido,
                        email,
                        foto
                    }
                    res.json(result)
                }   
        )
        .catch((error) => {
                console.error('Error al obtener la información de usuarios:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            })
    }
}

module.exports = controller;