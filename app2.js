"use strict";
(function () {
    var mensajes = 'Hola mundo !!';
    var numero = 123;
    var booleano = true;
    var tomorrow = new Date();
    // any  soporta cualquier tipo de variable
    var anymore;
    anymore = mensajes;
    anymore = numero;
    anymore = booleano;
    anymore = tomorrow;
    var person = {
        first_nane: 'Tomas',
        years: 35
    };
    person = {
        first_nane: 'Jhon',
        years: 40,
    };

    console.log( person);
})();
