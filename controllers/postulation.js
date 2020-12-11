const PostulationModel = require('../models/postulation')
const postulationController = {};

postulationController.create = async (req, res) => {

    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'los datos son obligatorios'

            })
        }
        const postulation = new PostulationModel({
            titlePostulation: req.body.titlePostulation,
            description: req.body.description,
            Position: req.body.Position,
            salary: req.body.salary,
            languaje: req.body.languaje
        })

        await postulation.save()
                res.send(dataPostulation)
           
    } catch (error) {
        res.status(500) - send({
            message: error.message
        })
    }


}
postulationController.update = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'los datos son obligatorios'

            })
        }

        const postulation = {
            titlePostulation: req.body.titlePostulation,
            description: req.body.description,
            Position: req.body.Position,
            salary: req.body.salary,
            languaje: req.body.languaje
        }
       const postulationUpdate = await PostulationModel.findByIdAndUpdate(req.params.id, postulation)

        res.send(postulationUpdate)

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

}

module.exports = postulationController