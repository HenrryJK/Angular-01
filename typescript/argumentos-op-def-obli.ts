(function(){
    function activated(person: String ,
         /// el incognito es para que sea opcional  y no marque error
        event ?: string,
         objeto: string = 'alemania' ,
        
         ) {
     //    console.log(`${ person } vive en ${objeto}`);
            if (event) {
                console.log(`${ person } vive en ${objeto} ${event}`);
            }else {
                console.log(`${ person } vive en ${objeto}`);
            }

    }
 //    activated('Henrry' , 'Peru');
  //  activated('Henrry' , 'Peru' , 'actualmente');
    activated('Henrry' , 'actualmente');
})();