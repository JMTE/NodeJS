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


    crearTarea(desc=""){


        const tarea=new Tarea(desc);

        this._listado[tarea.id] = tarea;
        //Entre corchetes para llamar a propiedades del objeto creado, si hubieramos hecho un arreglo en vez de un objeto solamente haria falta el push




    }



}

module.exports=Tareas;
