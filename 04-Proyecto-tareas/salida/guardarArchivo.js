const fs=require("fs");


const archivo="./database/data.json";


 const guardarDB=(data)=>{

    

    //Con un archivo json la informacion se puede comprobar de mejor forma, se podria hacer con un .txt

    fs.writeFileSync(archivo, JSON.stringify(data));

   



}

const leerDB=()=>{

    if (!fs.existsSync(archivo)){

        return null;

    }

    const info=fs.readFileSync(archivo, {encoding: "utf-8"});
   const data=JSON.parse(info);

   console.log(data);

   return data;

    

}



module.exports = {

    guardarDB,
    leerDB
}