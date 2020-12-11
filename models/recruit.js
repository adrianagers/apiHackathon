const mongoose = require('mongoose');

const recruitSchema = new mongoose.Schema({ 
    notify: {type: Boolean,required: true},
    applicantStatus: {type: String,required: true},
    applicantProcess: {type: String,required:true}
})

module.exports= mongoose.model('Recruit', recruitSchema)