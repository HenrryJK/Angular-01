(()=>{
 
    const sumar = ( a : number , b:number ):number =>  a + b;
    
    const first_name = ()  => 'Hola Henrry';

    const getsalary = ():Promise<string> => {
        return new Promise (( resolve , reject ) => {
            resolve('Henrry Jean Paul ');
        });
    }
    getsalary().then(a => console.log(a.toUpperCase() ))

    console.log(getsalary());
    })()