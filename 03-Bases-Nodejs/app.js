//Imprimir la tabla del 5 en la consola



const {crearArchivo}= require("./helpers/multiplicar");
// const base=3;
console.clear();






//console.log(process.argv);

const [ //Son los argumentos que forman el array al poner a funcionar la aplicacion normal node app,js
    ,
    ,
    arg3="base=5"
]=process.argv;

const [, base=5]=arg3.split("=");

console.log(base);


crearArchivo(base)

.then(nombreArchivo => console.log(nombreArchivo,"creado"))
.catch(error=> console.log(error))






