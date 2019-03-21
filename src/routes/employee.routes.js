const express = require('express');
const router =  express.Router();
const employeCtrl=require('../controllers/controller.employe');


router.get('/', employeCtrl.getEmployees);
router.post('/', employeCtrl.createEmploye);
router.get('/:id', employeCtrl.getEmploye);
router.delete('/:id', employeCtrl.deleteEmploye);
//router.put('/:id', employeCtrl.employeCtrl);
module.exports=router;