
const fs= require("fs");

var colors = require('colors');



const crearArchivo =async(base=5, listar=false )=>{

try{
    

    let salida="";

    for (let index = 1; index < 11; index++) {
        const element = index*base;
        salida += `${base}`.green.bold + " x ".red.bold +`${index}`.green.bold + " = ".red.bold +`${element}\n`.green.bold;
        
    }
    if (listar===true){
        console.log("-----------------------------".green.bold);
console.log(`        TABLA DEL ${base}           `.red.bold);
console.log("-----------------------------".green.bold);
console.log(salida);


    }
   
    
    // fs.writeFile(`tablal-${base}.txt`, salida, (err)=>{
    
    //     if (err) throw err;
    
    //     console.log("Archivo creado");
    // })
    
    fs.writeFileSync(`tabla-${base}.txt`, salida); //Si existe error hay que atraparlo con try y catch
    
    return (`tabla.txt-${base}`.rainbow);

        


}catch (error){


}
        

    

}

module.exports={

    crearArchivo:crearArchivo //Redundante, se podria dejar una sola
}