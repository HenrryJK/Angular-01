(()=>{
   /* class Employee {
        first_name : string ;
        ocupattion: string ;
        years: number;
        Manager_Activo: boolean ;
        n_asistencias: number ;


        constructor(first_name:string , ocupattion:string){
            this.first_name = first_name;
            this.ocupattion=ocupattion;
        }
    }*/

    class Employee {
     /*   first_name : string ;
        ocupattion: string ;
        years: number;
        Manager_Activo: boolean ;
        n_asistencias: number ;*/


        constructor(public first_name:string ,
             public  ocupattion:string , 
             public years: number ,
             public  Manager_Activo: boolean = true , 
             public  n_asistencias: number = 12){
           
        }
    }
    const admin = new Employee('Carlos' , 'Empleado' , 32);
  
    console.log(admin);


    })()