"use strict";
(() => {
    //                                 {nombre: string}
    const enviarTrabajador = (persona) => {
        console.log(`El trabajador ${persona.nombre} ya esta presente. `);
    };
    const finTrabajador = (persona) => {
        console.log(`El trabajador ${persona.nombre} se ha retirado. `);
    };
    /// poner reglas que cumplan con los campos declarados en la interface
    const employee = {
        nombre: 'Jerson',
        //   apellido: 'Monterrey' ,
        edad: 35
    };
    enviarTrabajador(employee);
    finTrabajador(employee);
})();
