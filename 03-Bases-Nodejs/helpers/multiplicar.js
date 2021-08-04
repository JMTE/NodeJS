
const fs= require("fs");

var colors = require('colors');



const crearArchivo =async(base=5, hasta=20, listar=false )=>{

try{
    

    let salida="" 
    let consola="";

    for (let index = 1; index < hasta+1; index++) {
        const element = index*base;
        salida += `${base} x ${index} =  ${element}\n`;
        consola += `${base}`.green.bold + " x ".red.bold +`${index}`.green.bold + " = ".red.bold +`${element}\n`.green.bold;
    }
    if (listar===true){
        console.log("-----------------------------".green.bold);
console.log(`        TABLA DEL ${base}           `.red.bold);
console.log("-----------------------------".green.bold);
console.log(consola);


    }
   
    
    // fs.writeFile(`tablal-${base}.txt`, salida, (err)=>{
    
    //     if (err) throw err;
    
    //     console.log("Archivo creado");
    // })
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //Si existe error hay que atraparlo con try y catch
    
    return `tabla-${base}.txt`;

        


}catch (error){


}
        

    

}

module.exports={

    crearArchivo:crearArchivo //Redundante, se podria dejar una sola
}