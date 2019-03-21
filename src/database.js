var mongoose = require('mongoose');
const URI = 'mongodb://apirest:apirest01@ds117816.mlab.com:17816/apirest';


mongoose.connect(URI)
.then(db=>console.log("DB connet"))
.catch(err=>console.log("error en connt DB"))