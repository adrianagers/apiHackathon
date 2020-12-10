module.exports = (app) =>{
    const crearOferta =require('../controllers/crearOferta')
    app.post('/crearOferta/create',crearOferta.create)
    app.put('/crearOferta/update/:id',crearOferta.update)
}