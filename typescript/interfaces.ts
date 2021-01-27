(()=>{
    //poner el signo "?" es para que sea opcional
    interface employees {
        nombre: string;
        edad: number;
        ocupacion?: string;
    }
    //                                 {nombre: string}
    const enviarTrabajador = (persona: employees) => {
        console.log(`El trabajador ${persona.nombre} ya esta presente. `)
    }
    const finTrabajador = (persona: employees) => {
        console.log(`El trabajador ${persona.nombre} se ha retirado. `)
    }
    /// poner reglas que cumplan con los campos declarados en la interface
    const employee:employees = {
        nombre: 'Jerson',
     //   apellido: 'Monterrey' ,
        edad:35
    }

    enviarTrabajador(employee);
    finTrabajador(employee);
    })()