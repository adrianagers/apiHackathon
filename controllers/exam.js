const examController = {};
const ExamModel = require('../models/exam')

examController.create = (req, res) => {
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
    exam.save()
        .then((dataExam) => { res.send(dataExam) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

examController.update = (req, res) => {
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
    
    ExamModel.findByIdAndUpdate(req.params.id, exam, { new: true })
        .then(
            (examUpdate) => {
                res.send(examUpdate)
            }
        ).catch(
            (error)=> {
                res.status(500).send({
                    message: error.message
                })
            }
        )    
}

examController.getAll =(req, res) => {
    ExamModel.find()
    .populate('companies')
    .exec()
    .then((exams) => res.send(exams))
    .catch(
        (error) => {
            res.status(500).send({
                message: error.nessage
            })
        }
    )
}
examController.getOne = (req, res) => {
    ExamModel.findById(req.params.id)
    .populate('companies')
    .exec()
    .then((exam) => {res.send(exam)})
    .catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}
examController.deleteOne= (req,res) => {
    ExamModel.findByIdAndRemove(req.params.id)
    .then((exam)=> {res.send(exam)})
    .catch(
        (error) => {
            res.status(500).send( {
                message:error.message
            })
        }
    )
}

module.exports = examController