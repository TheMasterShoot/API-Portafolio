'use strict'

//estas variables son para cargar los modulos
var express = require('express'); 
var bodyParser = require('body-parser');

//para ejecutar la funcion
var app = express();

//archivos de rutas
var project_routes = require('./routes/project');

// middlewares: es un metodo que se ejecuta antes de ejecutar la accion de un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //para que convierta todo lo que le llegue a JSON

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api', project_routes);

//exportar
module.exports = app;