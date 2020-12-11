const UserModel = require('../models/user');
const userController = {};
const bcript = require('bcryptjs');

userController.create = (req, res) => {

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

    user.save().then((dataUser) => {
        res.send(dataUser)
    }).catch((error) => {
        res.status(500).send({
            message: error.message

        })
    })
}
userController.update = (req, res) => {
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
    
    UserModel.findByIdAndUpdate(req.params.id, user)
        .then(
            (userUpdate) => {
                res.send(userUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}

userController.getAll = (req, res) => {
    UserModel.find()
        .then((users) => {
            res.send(users)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })

}
userController.getOne = (req, res) => {
    UserModel.findById(req.params.id)
       
        .then((user) => {
            res.send(user)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
userController.deleteOne=(req,res)=>{
    UserModel.findByIdAndRemove(req.params.id)
    .then((userdelete) => {
        res.send(userdelete)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
    }

userController.login= (req, res) =>{
    UserModel.findOne({email:req.body.email},(error, dataUser)=>{
        if (dataUser != null) {
            if (bcript.hashSync(req.body.password)) {
                res.send({token: service.createToken(dataUser)})    
            }else{
                res.status(400).send({
                    message: 'Los datos no coinciden'
                })
            }
            
        }else{
            res.status(400).send({
                message: 'Los datos no coinciden'
            })
        }
    })
}
module.exports = userController