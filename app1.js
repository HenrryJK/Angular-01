"use strict";
(function () {
    function bievenido(nombre, apellido, edad) {
        console.table('Hi good afternoon.. ' + nombre + ' ' + apellido + 'y tengo ' + edad + 'años'); // 
    }
    var datos = {
        nombre: 'Henrry',
        apellido: 'Orbezo',
        edad: 18
    };
    bievenido(datos.nombre, datos.apellido, datos.edad);
})();
