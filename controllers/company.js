const CompanyModel = require('../models/company')
const companyController = {};


companyController.create = async (req, res) => {

    try {

        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'los datos son obligatorios'

            })
        }
        const company = new CompanyModel({
            nameCompany: req.body.nameCompany,
            nitCompany: req.body.nitCompany,
            phoneCompany: req.body.phoneCompany,
            email: req.body.email,
            password: req.body.password
        })

        await company.save()
        res.send(company)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}


companyController.update = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'los datos son obligatorios'

            })
        }


        const company = {
            nameCompany: req.body.nameCompany,
            nitCompany: req.body.nitCompany,
            phoneCompany: req.body.phoneCompany,
            email: req.body.email,
        }

       const companyUpdate = await CompanyModel.findByIdAndUpdate(req.params.id, company)

        res.send(companyUpdate)

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}


companyController.getAll = async (req, res) => {

    try {
        await CompanyModel.find()
            ((company) => {
                res.send(company)
            })
    } catch (error) {

        res.status(500).send({
            message: error.message
        })
    }
}


companyController.getOne = async (req, res) => {
    try {
     const company =  await CompanyModel.findById(req.params.id)
            
            res.send(company)
            
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}


companyController.deleteOne = async (req, res) => {
    try {
        await CompanyModel.findByIdAndRemove(req.params.id)
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

module.exports = companyController