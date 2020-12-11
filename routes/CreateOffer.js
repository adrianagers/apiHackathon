module.exports = (app) =>{
    const CreateOffer =require('../controllers/CreateOffer')
    app.post('/CreateOffer/create',CreateOffer.create)
    app.put('/CreateOffer/update/:id',CreateOffer.update)
}