const express = require('express'); 
const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB} =require('./db'); 
const app =express();

app.use(cors())
app.use(bodyParser.json())

conectDB(); //conectamos base de datos 
require('./routes/user')(app)
require('./routes/recruit')(app)
require('./routes/postulation')(app)
require('./routes/notification')(app)
require('./routes/CreateOffer')(app)
require('./routes/company')(app)

app.listen(8080,()=>{
    console.log('El servidor se levando correctamente Coody')
})



