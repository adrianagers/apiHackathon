const RecruitModel = require('../models/recruit');
const recruitController = {};
recruitController.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })
        }

        const recruit = new RecruitModel({
            notify: req.body.notify,
            applicantStatus: req.body.applicantStatus,
            applicantProcess: req.body.applicantProcess
        })

        await recruit.save().then((dataRecruit) => {
            res.send(dataRecruit)
        })
    } catch (error) {
        res.status(500).send({
            message: error.message

        })
    }
}
recruitController.update = async (req, res) => {
    try {
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

      const recruitUpdate = await RecruitModel.findByIdAndUpdate(req.params.id, recruit)
        res.send(recruitUpdate)


    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

}

module.exports = recruitController