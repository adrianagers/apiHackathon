const CompanyModel =require('../models/company') 
const companyController = {};


companyController.create = (req, res) => {
   
    if (Object.entries(req.body).length == 0) {
       return res.status(400).send({
          message: 'los datos son obligatorios'

      })
    }
    const company = new CompanyModel({
        nameCompany: req.body.nameCompany,
        nitCompany:  req.body.nitCompany,
        phoneCompany:  req.body.phoneCompany,
        email: req.body.email,
        password:req.body.password
    })
  
    company.save()
        .then((dataCompany) => { res.send(dataCompany) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}





 companyController.update=(req,res)=>{
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'

        })
    }


    const company = {
        nameCompany: req.body.nameCompany,
        nitCompany:  req.body.nitCompany,
        phoneCompany:  req.body.phoneCompany,
        email: req.body.email,
 }
 CompanyModel.findByIdAndUpdate(req.params.id, company)
        .then(
            (companyUpdate) => {
                res.send(companyUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}

companyController.getAll=(req,res)=>{
    CompanyModel.find()
   
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}


companyController.getOne=(req,res)=>{
    CompanyModel.findById(req.params.id)
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}


companyController.deleteOne=(req,res)=>{
    CompanyModel.findByIdAndRemove(req.params.id)
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
        res.status(500).send({
            message:error.message
        })
    }

    )

} 
module.exports = companyController
