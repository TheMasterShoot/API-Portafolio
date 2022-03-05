'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
    la suma es: ${numero1 + numero2}
    la resta es: ${numero1 - numero2}
    la multiplicacion es: ${numero1 * numero2}
    la division es: ${numero1 / numero2}
`;

console.log(plantilla);

console.log('hola mundo con nodejs');

/*
    para tener preparado nuestro servidor Node es necesario
    instalar las siguientes dependencias:
    
    npm init: nos crea un package.json
    express: es un framework para trabajar con http
    body-parser: para convertir petiones hechas al backend en un objeto JSON
    connect-multiparty: permite subir archivos al backend
    mongoose: para trabajar con mongoDB
    nodemon: para que cada vez que haga un cambio en el codigo se refresque el servidor
*/