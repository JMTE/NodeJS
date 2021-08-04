
const fs= require("fs");



const crearArchivo =async(base=5, listar=false )=>{

try{
    

    let salida="";

    for (let index = 1; index < 11; index++) {
        const element = index*base;
        salida += `${base} x ${index} = ${element}\n`;
        
    }
    if (listar===true){
        console.log("-----------------------------");
console.log(`        TABLA DEL ${base}           `);
console.log("-----------------------------");
console.log(salida);


    }
   
    
    // fs.writeFile(`tablal-${base}.txt`, salida, (err)=>{
    
    //     if (err) throw err;
    
    //     console.log("Archivo creado");
    // })
    
    fs.writeFileSync(`tabla-${base}.txt`, salida); //Si existe error hay que atraparlo con try y catch
    
    return (`tabla.txt-${base}`);

        


}catch (error){


}
        

    

}

module.exports={

    crearArchivo:crearArchivo //Redundante, se podria dejar una sola
}