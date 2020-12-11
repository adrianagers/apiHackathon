const mongoose = require('mongoose');

const CreateOfferSchema = new mongoose.Schema({ 
    title: {type: String,required: true},
    description: {type: String,required: true},
    Position: {type: String,required: true, unique: true},
    salary: {type: Number},
    Location:{type:String, required:true},
    termTime:{type:Date,required:true }
    
})

module.exports= mongoose.model('CreateOffer', CreateOfferSchema)