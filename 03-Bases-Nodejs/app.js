//Imprimir la tabla del 5 en la consola
console.clear();

console.log("-----------------------------");
console.log("        TABLA DEL 5           ");
console.log("-----------------------------");




const base=5;
for (let index = 1; index < 11; index++) {
    const element = index*base;
    console.log(`${base} x ${index} = ${element}`);
    
}