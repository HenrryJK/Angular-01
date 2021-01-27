(function(){

        console.log('Inicio');
            // resolve : retornar   ; reject : llama su sucede algun error 
        const promise = new Promise( (resolve , reject  ) => {
            setTimeout(() => {
             //   resolve('El pedido se ha enviado correctamente')
                reject('El pedido se ha enviado correctamente')
            } , 1000)

            

        });
        /// el then se dirapara  cuando se resuelva la promesa
        promise
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));

        console.log('Fin');
    })()