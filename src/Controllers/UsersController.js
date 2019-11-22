const db = require('../libs/config');

const User = db.models.Users;
const GetAllUsers = (req, res, next) => {
    User.findAll({})
    .then(users => {
        return res.status(200).json(users)
    }).catch(err => {
        res.status(500).send({
            message: 'Ocurrió un error al consultar usuarios',
            data: null,
            response: false,
            errors: {
                message: err.message
            }
        });
    })
}

const GetUserByDoc = (req,res, next) =>{
    User.findOne({
        attributes: ['Apps'],
        where: {
            UserDoc: req.body.UserDoc
        } 
    }).then(user => {
        return res.status(200).json(user)
    }).catch(err => {
        res.status(500).send({
            message: 'Ocurrió un error al consultar usuarios',
            data: null,
            response: false,
            errors: {
                message: err.message
            }
        });
    })
}


module.exports = {
    GetAllUsers,
    GetUserByDoc
};
