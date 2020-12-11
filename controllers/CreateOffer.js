const CreateOfferModel = require ('../models/createoffer');
const createOfferController = {};
createOfferController.create = (req, res) => {
   
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const createOffer = new CreateOfferModel({
        title: req.body.title,
        description: req.body.description,
        Position: req.body.Position,
        salary: req.body.salary,
        Location: req.body.ubicacion,
        termTime: req.body.termTime 

    })

    createOffer.save()
    .then((dataoffer) => {
        res.send(dataoffer)
    }).catch((error) => {
        res.status(500).send({
            message: error.message

        })
    })
}
createOfferController.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const createOffer = {
        title: req.body.title,
        description: req.body.description,
        Position: req.body.Position,
        salary: req.body.salary,
        Location: req.body.ubicacion,
        termTime: req.body.termTime 

    }
    
    CreateOfferModel.findByIdAndUpdate(req.params.id, createOffer)
        .then(
            (offerUpdate) => {
                res.send(offerUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}


module.exports = createOfferController