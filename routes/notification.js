module.exports = (app) =>{
    const notification = require('../controllers/notification')
    app.post('/notification/create',notification.create)
    app.put('/notification/update/:id',notification.update)
}