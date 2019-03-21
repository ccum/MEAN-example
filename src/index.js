var express = require('express');
var mongoose = require('./database');



var app = express();
app.use(require('../src/routes/employee.routes'));
app.listen(3000, function(){
    console.log("servidor en el puerto 3000")
});

