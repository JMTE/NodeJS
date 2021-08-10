const Tarea = require("./tarea");


class Tareas{

    _listado={}; //Lo vamos a listar como un objeto para que sea mas facil las validaciones de cada elemento

    get listadoArray(){ //Queremos transformar nuestro objeto en arrays para poder presentarlo de mejor manera por consola

        const listado=[];

        Object.keys(this._listado).forEach(key =>{

            const tarea=this._listado[key];
            listado.push(tarea);

            
        }); //Esta funcion nos devuelve el array de todas las llaves


        return listado;
    }

    constructor(){

        this._listado={};

    }

    borrarTarea(id=""){

        if(this._listado[id]){

            delete this._listado[id];
        }
    }


    cargarTareasFromArray(tareas=[]){

        tareas.forEach(tarea=>{

            this._listado[tarea.id]=tarea;
        })
    }

    crearTarea(desc=""){


        const tarea=new Tarea(desc);

        this._listado[tarea.id] = tarea;
        //Entre corchetes para llamar a propiedades del objeto creado, si hubieramos hecho un arreglo en vez de un objeto solamente haria falta el push




    }

    listadoCompleto(){

        //Listar la lista de tareas sin id , solo con descripcion o completada o no

        this.listadoArray.forEach((tarea,index)=>{

            const idx= `${index+1}`.green;
            const {descripcion, completadoEn}=tarea;

            const estado=(completadoEn)? "Completada".green : "Pendiente".red

            console.log(`${idx} ${descripcion} :: ${estado}`);



        })
    }


    listarPendientesCompletadas(completadas=true){

        let contador=0;

        this.listadoArray.forEach((tarea)=>{

           
            
            const {descripcion, completadoEn}=tarea;

            const estado=(completadoEn)? "Completada".green : "Pendiente".red


            if (completadas){

                //Mostrar completadas

                if (completadoEn){

                    contador+=1;

                    console.log(`${contador.toString().green + ".".green} ${descripcion} :: ${completadoEn}`);

                }
            }else{

                //mostrar pendientes

                if (!completadoEn){

                    contador+=1;

                    console.log(`${contador.toString().green + ".".green} ${descripcion} :: ${estado}`);

                }
            }
            



        })
        
    }



    cambiarCompletadas(ids=[]){


        ids.forEach(id=>{

            const tarea= this._listado[id];

            if(!tarea.completadoEn){

                tarea.completadoEn=new Date().toISOString();

            }
        });

        this.listadoArray.forEach(tarea=>{

            if(!ids.includes(tarea.id)){

              this._listado[tarea.id].completadoEn=null;
            }
        })
    }


   




}

module.exports=Tareas

