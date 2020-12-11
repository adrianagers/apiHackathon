const CreateOfferModel = require('../models/createoffer');
const createOfferController = {};


createOfferController.create = async (req, res) => {
    try {
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

        await createOffer.save()
        res.send(offer)
    } catch (error) {
        res.status(500).send({
            message: error.message

        })
    }
}


createOfferController.update = async (req, res) => {
    try {
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

     const offerUpdate =  await CreateOfferModel.findByIdAndUpdate(req.params.id, createOffer)

        res.send(offerUpdate)

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

}


module.exports = createOfferController;