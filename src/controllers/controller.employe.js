const employeeModels = require("../models/employee")
const employeCtr={};


employeCtr.getEmployees =async(req,res) =>{
    const lstEmployes = await employeeModels.find();
    res.json(lstEmployes);

};
employeCtr.getEmploye= (req,res) =>{
};
employeCtr.createEmploye=async (req,res) =>{
    const create = await employeeModels.create(req.body);
    req.json({
        status : 'creado'
    })
};
employeCtr.deleteEmploye= (req,res) =>{
};
module.exports= employeCtr
