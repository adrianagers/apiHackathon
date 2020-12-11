const NotificationModel = require('../models/notification')
const notificationController = {};

notificationController.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'los datos son obligatorios'

            })
        }
        const notification = new NotificationModel({
            statusNotification: req.body.statusNotification,
            messageNotification: req.body.messageNotification
        })

        await notification.save()
        res.send(datanotification)
    } catch (error) {
        res.status(500) - send({
            message: error.message
        })
    }
}
notificationController.update = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'los datos son obligatorios'

            })
        }

        const notification = {
            statusNotification: req.body.statusNotification,
            messageNotification: req.body.messageNotification
        }
       const notificationUpdate =  await NotificationModel.findByIdAndUpdate(req.params.id, notification)

        res.send(notificationUpdate)

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = notificationController