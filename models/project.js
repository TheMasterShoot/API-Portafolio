'use strict'

//carga de modulos
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//definicion de nuestro modelo
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('project', ProjectSchema);
//projects --> guarda los documentos en la coleccion