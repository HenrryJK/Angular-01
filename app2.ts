(()=>{
 // Uso de Let y Const
const nombre = "Henrry Jean Paul";
const  edad = 18;


const PERSONAJE = {nombre,edad};
 
 
// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre : string;
  artesMarciales:string[];
}
var batman : Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu" ]
}
 
 
// Convertir esta funcion a una funcion de flecha
const resultadoDoble = ( a:number, b:number ) => {
  return (a + b) * 2
}
 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre : string, 
                      poder?:string, 
                      arma:string ='Arco' ){
  let mensajes;
  if( poder ){
     mensajes = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensajes = nombre + " tiene un " + poder
  }
};
 
 
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
  class rectangulo { 
    constructor(public base : number,
                public altura:number){}

      /*calcularArea(){
        return this.base * this.altura;
      }*/

      calcularArea = () => this.base * this.altura;
      
  }


    })()