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
        :reject("No existe el empleado")
    });
}

const id=3;

// getEmpleado(id)
//     .then (empleado => console.log(empleado))
//     .catch(error => console.log(error));


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(error => console.log(error));


getEmpleado(id)
.then(empleado => {

        getSalario(id)
        .then(salario => {
            console.log("El empleado", empleado, "tiene un salario de ",salario);
        })
        .catch(error=>console.log(error))
})

.catch(error => console.log(error))