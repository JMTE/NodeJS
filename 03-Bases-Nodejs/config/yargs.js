const { describe } = require("yargs");

const argv=require("yargs")
.option("b", {

alias:"base",
type:"number",
demandOption:true,
describe:"Es la base de nuestra tabla de multiplicar"



})

.option("h", {

    alias:"hasta",
    type:"number",
    demandOption:true,
    describe:"Es el numero hasta el cual tiene que multiplicar"
    
    
    
    })
    

.option("l", {

    alias:"listar",
    type: "boolean",
    default:false,
    describe:"Muestra los datos de la tabla en consola"
})      
.check( (argv, options) => {

    if (isNaN(argv.b)){
        throw "La base tiene que ser un numero"
    }
    return true;
})



                    .argv;




module.exports=argv;
