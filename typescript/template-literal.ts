(function(){
   
        function getYersOld () {
            return 118  - 100 ;
        }
    const first_name = 'Henrry';
    const last_name = 'Orbezo';
    const years = 18;

    // const salida = nombre + apellido + edad;
   // const salida = first_name + " " + last_name + " ( "+ years +  " )";
   // const salida =  `${ first_name } ${last_name} (${years + 3})`;
   const salida =  `${ first_name } ${last_name} (${getYersOld()})`;
    console.log(salida);

})();