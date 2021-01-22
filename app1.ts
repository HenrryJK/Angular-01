(function(){
function bievenido( nombre: string , apellido:string , edad:number ) {
    console.table( 'Hi good afternoon.. ' + nombre +  ' ' + apellido + 'y tengo ' + edad +   'años' ); // 
}


const datos = {
    nombre: 'Henrry',
    apellido: 'Orbezo',
    edad: 18
};


bievenido( datos.nombre , datos.apellido , datos.edad  );
})();



