//Imprimir la tabla del 5 en la consola



const { boolean } = require("yargs");
const {crearArchivo}= require("./helpers/multiplicar");
// const base=3;


const argv=require("yargs")
.option("b", {

alias:"base",
type:"number",
demandOption:true



})



.option("l", {

    alias:"listar",
    type: "boolean",
    default:false
})
.check( (argv, options) => {

    if (isNaN(argv.b)){
        throw "La base tiene que ser un numero"
    }
    return true;
})



                    .argv;





console.log(argv);

//console.log(process.argv);

// const [ //Son los argumentos que forman el array al poner a funcionar la aplicacion normal node app,js
//     ,
//     ,
//     arg3="base=5"
// ]=process.argv;

// const [, base=5]=arg3.split("=");

// console.log(base);


 crearArchivo(argv.b, argv.l)

 .then(nombreArchivo => console.log(nombreArchivo,"creado"))
 .catch(error=> console.log(error))






