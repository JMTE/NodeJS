const empleados = [{
    id: 1,
    nombre: "Fernando"
},

{
    id: 2,
    nombre: "Maria"
},
{
    id: 3,
    nombre: "Antonio"
}
];

const salarios = [{
    id: 1,
    salario: 1000
},

{
    id: 2,
    salario: 1500
},
{
    id: 3,
    
}
];


const getEmpleado = (id, callback) => {

    

   return new Promise((resolve, reject)=> {

        const empleado = empleados.find((emp => emp.id === id))?.nombre;

        (empleado)
            ?resolve(empleado)


            :reject("No existe el empleado")
    


    });

    

}

const getSalario =(id, callback)=>{

    return new Promise((resolve,reject)=>{
        const salario =salarios.find((emp=> emp.id===id ))?.salario;

        (salario)
        ?resolve(salario)
        :reject("No existe el salario para ese empleado")
    });
}

//Una forma mas limpia de hacer la promesa con async y await
const id=3;


const getInfoUsuario= async() =>{

    try{

        const empleado=await getEmpleado(id);
    const salario=await getSalario(id);

    return `El salario del empleado ${empleado} es de ${salario}`;


    }catch (error){

        return error;


    }

    

}

getInfoUsuario(id)
.then(msg=> console.log(msg))
.catch(error => console.log(error))