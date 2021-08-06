const inquirer = require("inquirer")
require("colors");


// Nos hemos descargado el paquete inquirer mediante el cual podemos construir menus interactivos
// en nuestra consola. Para ello lo instalamos mediante el nmp i inquirer


const menuOpciones=[
    {
        type: "list",
        name:"opcion",
        message:"¿Que desea hacer?",
        choices: [
            {
                value:"1",
                name:"1. Crear nueva tarea"

            },
            {
                value:"2",
                name:"2. Ver listado de las tareas"

            },
            {
                value:"3",
                name:"3. Ver el listado de las tareas completadas"

            },
            {
                value:"4",
                name:"4. Ver el listado de las tareas pendientes"

            },
            {
                value:"5",
                name:"5. Marcar tarea como completada"

            },
            {
                value:"6",
                name:"6. Borrar una tarea"

            },
            {
                value:"7",
                name:"7. Salir"

            }
            
            
            
            
            ]





}

    

]

const inquirerMenu= async()=>{



    console.clear();
        console.log("###################################".green.bold);
        console.log("      Seleccione la opción         ".red.italic);
        console.log("###################################\n".green.bold);
    
        const {opcion}= await inquirer.prompt(menuOpciones);

        return opcion;
    
}

const repetirMenu = async()=>{



    const frasePausa=[
        {
            type:"input",
            name:"pausa",
            message: `\nPresione ${"ENTER".green} para continuar\n`
        }
    ]
    console.log("\n");
   const {pausa}= await inquirer.prompt(frasePausa);
    return pausa;
}

module.exports=  {

    inquirerMenu,
    repetirMenu
}