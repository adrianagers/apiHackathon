const UserModel = require('../models/user');
const userController = {};
const bcript = require('bcryptjs');

userController.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })
        }

        const user = new UserModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcript.hashSync(req.body.password),
            phone: req.body.phone

        })

        await user.save()
        res.send(user)
    } catch (error) {
        res.status(500).send({
            message: error.message

        })
    }
}
userController.update = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })
        }

        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone

        }

     const userUpdate = await UserModel.findByIdAndUpdate(req.params.id, user)
        res.send(userUpdate)

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

userController.getAll = async (req, res) => {
    try {
     const users = await  UserModel.find()
       
            res.send(users)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

}
userController.getOne = async (req, res) => {
    try {
        UserModel.findById(req.params.id)
            res.send(user)
       
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
   
        
}
userController.deleteOne = async (req, res) => {
    try {
     UserModel.findByIdAndRemove(req.params.id)
     res.json({
        status: 200,
        message: `El siguiente ID fue eliminado ${res.params.id}`
    })
    
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

userController.login = async (req, res) => {
   await UserModel.findOne({
        email: req.body.email
    },
    (error, dataUser) => {
        if (dataUser != null) {
            if (bcript.hashSync(req.body.password)) {
                res.send({
                    token: service.createToken(dataUser)
                })
            } else {
                res.status(400).send({
                    message: 'Los datos no coinciden'
                })
            }

        } else {
            res.status(400).send({
                message: 'Los datos no coinciden'
            })
        }
    })
}
module.exports = userController