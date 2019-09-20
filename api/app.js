'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
//llamar a router como si fuera un modulo
var user_routes = require('./routes/user');
var artist_routes = require('./routes/artist');
var album_routes = require('./routes/album');
var song_routes = require('./routes/song');

//lo que hace es que convierte a objeto JSON los datos que nos
//llegan por peticiones HTTP

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Configurar las cabeceras http
//Permitimos el acceso a todos los dominios,acceso a nuestra API
app.use((req, res, next)=>{
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
 res.header('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, DELETE');
 res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 next();
});

//rutas bases
//en use hacemos como un tipo de middleware para que cualquier llamada
//via http va estar antes: /api y luego leerá las rutas
app.use('/api', user_routes);
app.use('/api', artist_routes);
app.use('/api', album_routes);
app.use('/api', song_routes);

app.get('/pruebas', function(req, res){
    res.status(200).send({message: 'Bienvenido al curso de anapaulaweb.com'})
});

//exportar el modulo
module.exports = app;
