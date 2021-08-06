
require("colors");

const Tareas = require("./modelos/tareas");
const { guardarDB, leerDB } = require("./salida/guardarArchivo");
const { inquirerMenu, repetirMenu, leerInput } = require("./salida/inquirer");






const main =async()=>{

    console.clear();

    let opt="";

    const tareas=new Tareas();

    
  

    do{
        //Imprimir el menu
         opt =await inquirerMenu();

       switch (opt){

        case "1":

        //Crear opcion

                const desc=await leerInput("Dame la tarea a realizar:");
                tareas.crearTarea(desc);
                guardarDB(tareas.listadoArray);
            break;
        
        case "2":
            const tareasDB=leerDB();

            if (tareasDB){
        
                //Establecer las tareas
        
            }
        
        
        
                break;
        case "3":
            break;
        case "4":
             break;
        case "5":
            break;
        case "6":
            break;
        case "7":
            break;
        default:
                console.log("Algo va mal");





       }


       
        // const tarea=new Tarea("Aprender Angular");
        // const tareas=new Tareas();

        // tareas._listado[tarea.id]=tarea;
        // console.log(tareas);


      
            await repetirMenu();
        
       


    } while(opt !=='7');

   

    // repiteMenu();



}


main();