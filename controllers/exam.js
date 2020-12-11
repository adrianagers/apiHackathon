const examController = {};
const ExamModel = require('../models/exam')

examController.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'Los datos son obligatorios'
            })
        }
        const exam = new ExamModel({
            tituloExamen: req.body.tituloExamen,
            descripcionExamen: req.body.descripcionExamen,
            lenguajeExamen: req.body.lenguajeExamen,
            linkExamen: req.body.linkExamen,
            cargo: req.body.cargo,
            salario: req.body.salario,
            empresa: req.body.empresa
        })
        await exam.save()
        res.send(dataExam)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

examController.update = async (req, res) => {

    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'Los datos son obligatorios.'
            })

        }

        const exam = {
            tituloExamen: req.body.tituloExamen,
            descripcionExamen: req.body.descripcionExamen,
            lenguajeExamen: req.body.lenguajeExamen,
            linkExamen: req.body.linkExamen,
            cargo: req.body.cargo,
            salario: req.body.salario,
            empresa: req.body.empresa
        }

       const examUpdate =  await ExamModel.findByIdAndUpdate(req.params.id, exam, {
            new: true
        })
        res.send(examUpdate)

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

}

examController.getAll = async (req, res) => {
    try {
        await ExamModel.find()
            .populate('companies')
            .exec()
        res.send(exams)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
examController.getOne = async (req, res) => {
    try {
       const exam = await ExamModel.findById(req.params.id)
            .populate('companies')
            .exec()
        res.send(exam)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
examController.deleteOne = async (req, res) => {
    try {
        await ExamModel.findByIdAndRemove(req.params.id)
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

module.exports = examController