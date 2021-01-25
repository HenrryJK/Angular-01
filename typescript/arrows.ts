(function(){
   // normal
    const mimetodo =function (mensaje:string){
        return mensaje.toUpperCase();
    }
    /// simplificado y mas sencillo 

    const mimetodoF = (mensaje :string) => mensaje.toUpperCase();

    const SumaN = function (a:number , b: number) {
        return a +b 
    }

    const SumaF = (a: number , b:number) => a + b;
    console.log(mimetodo('Normal'));
    console.log(mimetodoF('Flecha'));

    console.log(SumaN(5,5));
    console.log(SumaF(10,10));


    const person = {
        first_name : 'Jean Paul'  , 
        welcome() {
            setTimeout ( () => {
                console.log(`${this.first_name} bienvenido!!`)
            } , 1000 );  //el tiempo que demora en imprimir en este caso equivale a un minuto

        }
    }
    person.welcome();

})();