const RecruitModel = require('../models/recruit');
/**
 * Metodo para almacenal un nuevo usuario 
 * @param {*} req => todo lo que enviamos desde el dody (formulario)
 * @param {*} res => la respuesta que se devolvera 
 */
exports.create = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        // console.log('esta llegando')
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const recruit = new RecruitModel({
        notify: req.body.notify,
        applicantStatus: req.body.applicantStatus,
        applicantProcess: req.body.applicantProcess
    })

    recruit.save().then((dataRecruit) => {
        res.send(dataRecruit)
    }).catch((error) => {
        res.status(500).send({
            message: error.message

        })
    })
}
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const recruit = {
        notify: req.body.notify,
        applicantStatus: req.body.applicantStatus,
        applicantProcess: req.body.applicantProcess
    }
    
    RecruitModel.findByIdAndUpdate(req.params.id, recruit)
        .then(
            (recruitUpdate) => {
                res.send(recruitUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
