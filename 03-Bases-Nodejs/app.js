//Imprimir la tabla del 5 en la consola

const fs= require("fs");

const base=3;
console.clear();

console.log("-----------------------------");
console.log(`        TABLA DEL ${base}           `);
console.log("-----------------------------");





let salida="";


for (let index = 1; index < 11; index++) {
    const element = index*base;
    salida += `${base} x ${index} = ${element}\n`;
    
}

console.log(salida);

fs.writeFile(`tablal-${base}.txt`, salida, (err)=>{

    if (err) throw err;

    console.log("Archivo creado");
})