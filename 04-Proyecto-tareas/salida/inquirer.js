const inquirer = require("inquirer")
require("colors");


// Nos hemos descargado el paquete inquirer mediante el cual podemos construir menus interactivos
// en nuestra consola. Para ello lo instalamos mediante el nmp i inquirer


const menuOpciones=[
    {
        type: "list",
        name:"opcion",
        message:"¿Que desea hacer",
        choices: ["opt1","opt2","opt3"]





}

    

]

const inquirerMenu= async()=>{



    console.clear();
        console.log("###################################".green.bold);
        console.log("      Seleccione la opción         ".red.italic);
        console.log("###################################\n".green.bold);
    
        const opt = await inquirer.prompt(menuOpciones);

        return opt;
    
}

module.exports=  {

    inquirerMenu
}