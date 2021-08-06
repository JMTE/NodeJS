
require("colors");
const Tarea = require("./modelos/tarea");
const Tareas = require("./modelos/tareas");
const { inquirerMenu, repetirMenu } = require("./salida/inquirer");






const main =async()=>{

    console.clear();

    let opt="";

    do{

        // opt =await inquirerMenu();

        // console.log({opt});
        console.clear()
        const tarea=new Tarea("Aprender Angular");
        const tareas=new Tareas();

        tareas._listado[tarea.id]=tarea;
        console.log(tareas);


      
            await repetirMenu();
        
       


    } while(opt !=='7');

   

    // repiteMenu();



}


main();