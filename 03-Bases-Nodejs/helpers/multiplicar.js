
const fs= require("fs");



const crearArchivo =async(base=5)=>{

try{
    console.log("-----------------------------");
console.log(`        TABLA DEL ${base}           `);
console.log("-----------------------------");


    let salida="";

    for (let index = 1; index < 11; index++) {
        const element = index*base;
        salida += `${base} x ${index} = ${element}\n`;
        
    }
    
    console.log(salida);
    
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