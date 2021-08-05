
require("colors");
const { inquirerMenu, repetirMenu } = require("./salida/inquirer");






const main =async()=>{

    console.clear();

    let opt="";

    do{

        opt =await inquirerMenu();

        console.log({opt});

      
            await repetirMenu();
        
       


    } while(opt !=='7');

   

    // repiteMenu();



}


main();