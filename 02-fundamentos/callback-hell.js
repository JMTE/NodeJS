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

const salario = [{
        id: 1,
        nombre: 1000
    },

    {
        id: 2,
        nombre: 1500
    },
    {
        id: 3,
        nombre: 3000
    }
];


const getEmpleado = (id, callback) => {

    const empleado = empleados.find((emp => emp.id === id))

    if (empleado) {
        callback(null, empleado);
    } else {

        callback(`El empleado con id ${id} no existe`);
    }






}

getEmpleado(1, (error, empleado) => {

    if (error) {

        console.log("ERROR");

        return console.log(error);
    } else {

        console.log("El empleado existe");

        console.log(empleado);

    }


})