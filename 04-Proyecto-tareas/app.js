
require("colors");
const { inquirerMenu } = require("./salida/inquirer");
const { mostrarMenu, repiteMenu } = require("./salida/mensajes");





const main =async()=>{

    console.clear();

    let opt="";

    do{

        opt =await inquirerMenu();

        console.log({opt});

        if (opt!=="7"){
            await repiteMenu();
        } 
       


    } while(opt !=="7");

   

    // repiteMenu();



}


main();