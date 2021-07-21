const deadpool = {

    nombre: "Wade",
    apellido: "Wiston",
    poder: "Regeneracion",
    edad: 50,
    getNombre: function() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) { //Desestructuracion

    nombre = "Fernando";
    console.log(nombre, apellido, poder, edad);



}

const heroes = ["Deadpool", "Superman", "Batman"];


const [, , h3] = heroes;
//imprimeHeroe(deadpool);

console.log(h3);