
require("colors");

const Tareas = require("./modelos/tareas");
const { guardarDB, leerDB } = require("./salida/guardarArchivo");
const { inquirerMenu, repetirMenu, leerInput, listadoTareasBorrar, confirmar } = require("./salida/inquirer");






const main =async()=>{

    let opt="";

    const tareas=new Tareas();
    
    
    const tareasDB=leerDB();

    if (tareasDB){//cargar tareas

        tareas.cargarTareasFromArray(tareasDB);
    }
              


    do{
        //Imprimir el menu
         opt =await inquirerMenu();

       switch (opt){

        case '1':

        //Crear opcion

                const desc=await leerInput("Dame la tarea a realizar: \n");
                tareas.crearTarea(desc);
           
                
                
            break;
        
        case '2':
        
       

            
            tareas.listadoCompleto();
        
        
                break;
        case '3': //Listar completadas
            tareas.listarPendientesCompletadas(true);
            break;
        case '4': //Listar pendientes
            tareas.listarPendientesCompletadas(false);
             break;
        case '5':
            break;
        case '6':

                const id= await listadoTareasBorrar(tareas.listadoArray);
                //Preguntar si esta seguro de borrar la tarea
                if (id!==0){
                    const ok=await confirmar("¿Deseas borrar la tarea?")

                if (ok){
                    tareas.borrarTarea(id);
                    console.log("Tarea borrada correctamente");
                }
               
                }
            break;
        case '7':
            break;
        default:
                console.log("Algo va mal");





       }
       guardarDB(tareas.listadoArray);
       
       
        // const tarea=new Tarea("Aprender Angular");
        // const tareas=new Tareas();

        // tareas._listado[tarea.id]=tarea;
        // console.log(tareas);


      
            await repetirMenu();
        
       


    } while(opt !=='7');

    

    // repiteMenu();



}


main();