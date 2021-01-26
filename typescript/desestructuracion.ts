(function(){
  const employee = {
      first_name : 'Miguel' ,
      ocupattion: 'Admin',
      state : 'Actived'
  }



      //  const extraer = (employee: any)  => {
        const extraer = ({first_name , ocupattion}: any)  => {
        //    const {first_name , ocupattion , state} = employee;
        
        console.log(first_name);
        console.log(ocupattion);
        }
  //  extraer(employee);

        const employees : string[] = ['Miguel' , 'Santiago' , 'Diego'];

      //  const [Andres , Renzo ,Janet] = employees;
      const [, ,Janet] = employees;
      //  console.log(employees[0]);
      //  console.log(employees[1]);
      //  console.log(employees[2]);
       // console.log(Andres);
       // console.log(Renzo);
    //     console.log(Janet);

        const extraerArr = ( [miguel, santiago , diego]: string[] ) => {
            console.log(miguel);
            console.log(santiago);
            console.log(diego);
        }

        extraerArr(employees);
    })()