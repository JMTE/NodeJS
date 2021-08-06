const fs=require("fs");

 const guardarDB=(data)=>{

    const archivo="./database/data.json";

    //Con un archivo json la informacion se puede comprobar de mejor forma

    fs.writeFileSync(archivo, JSON.stringify(data));

   



}

module.exports = {

    guardarDB
}