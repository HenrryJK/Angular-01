    function printconsole(contructorClass : Function) { 
        console.log(contructorClass);
    }
    
   @printconsole 
    export class Employee { 
       
       constructor(
         public nombre:string ,
        public codigo:string

       ){}

       print () {
           console.log(`${ this.nombre} - ${this.codigo}`)
       }
       

    }