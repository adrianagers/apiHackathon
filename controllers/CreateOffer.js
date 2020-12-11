const CreateOfferModel = require ('../models/createoffer');
/**
 * Metodo para almacenal un nuevo usuario 
 * @param {*} req => todo lo que enviamos desde el dody (formulario)
 * @param {*} res => la respuesta que se devolvera 
 */
exports.create = (req, res) => {
    /**
     * El sisgno de admiracion (!) antede de la condicion  significa que estamos negando la condicion
     */

    if (Object.entries(req.body).length == 0) {
        // console.log('esta llegando')
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
/**
 * Metodo para actualizar el usuario 
 * @param {*} req =>todo lo que enviamos desde el dody (formulario)
 * @param {*} res =>la respuesta que se devolvera
 */
exports.update = (req, res) => {
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
