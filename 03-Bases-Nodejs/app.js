//Imprimir la tabla del 5 en la consola



const {crearArchivo}= require("./helpers/multiplicar");
const base=3;
console.clear();

crearArchivo(base)

.then(nombreArchivo => console.log(nombreArchivo,"creado"))
.catch(error=> console.log(error))






