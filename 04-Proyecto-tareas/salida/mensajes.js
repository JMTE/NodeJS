
require("colors");
const mostrarMenu = () =>{

    return new Promise (resolve =>{

        console.clear();
        console.log("###################################".green.bold);
        console.log("      Seleccione la opción         ".red.italic);
        console.log("###################################\n".green.bold);
    
        console.log(`${"1.".red } ${"Crear nueva tarea".blue}`);
        console.log(`${"2.".red } ${"Ver listado de las tareas".blue}`);
        console.log(`${"3.".red } ${"Ver el listado de las tareas completadas".blue}`);
        console.log(`${"4.".red } ${"Ver el listado de las tareas pendientes".blue}`);
        console.log(`${"5.".red } ${"Marcar tarea como completada".blue}`);
        console.log(`${"6.".red } ${"Borrar una tarea".blue}`);
        console.log(`${"7.".red } ${"Salir".blue}\n`);
    
    
        const readline=require("readline").createInterface({  
            // readLine es propio de Node
    
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question("Seleccione una opción: ",(opt)=>{
    
            
            readline.close();
            resolve(opt);
        })
    
        
    })

}  

    const repiteMenu =()=>{

        return new Promise(resolve =>{
            const readline=require("readline").createInterface({  
            // readLine es propio de Node
    
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${"ENTER".green} para continuar\n`,(opt)=>{
    
            
            readline.close();

            resolve();
        })

        })

        

    }
    



module.exports ={

    mostrarMenu, repiteMenu
}

