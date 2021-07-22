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

const id = 3;
const getEmpleado = (id, callback) => {

    const empleado = empleados.find((emp => emp.id === id))?.nombre

    if (empleado) {
        callback(null, empleado);
    } else {

        callback(`El empleado con id ${id} no existe`);
    }

}

const getSalario = (id, callback) => {

    const salario = salarios.find(sal => sal.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {

        callback(`El salario con id ${id} no existe`);
    }

}



getEmpleado(id, (error, empleado) => {

    if (error) {

        console.log("ERROR");

        return console.log(error);
    } else {

        

        getSalario(id, (error, salario) => {

            if (error) {
        
                console.log("ERROR");
        
                return console.log(error);
            } else {
        
               console.log("El empleado ", empleado.nombre, "tiene un salario de : ", salario);
        
            }
        
        
        })

    }


})




