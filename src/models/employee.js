const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema ({
    name: {type:String, required:true},
    apellido: {type:String, required:true},
    edad :{type: Number, required:true}
});

module.exports = mongoose.model('Employee',employeeSchema);