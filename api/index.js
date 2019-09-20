'use strict'
//CONEXIÓN A MONGO DB REALIZADA!
var mongoose = require('mongoose');
//ejecutamos el fichero de javascript quien va a tener a express, 
//todas las rutas de carga central
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso-mean', (err, res)=> {
    if(err){
        throw err;
    }else {
        console.log("La conexión a la base de datos está funcionando correctamente");
        app.listen(port, function(){
            console.log("Servidor del API REST de musica está escuchando en http://localhost:"+port);
        });

    }
});