// setTimeout(function() {

//     console.log("Hola mundo");



// }, 1000);

// setTimeout(() => {

//     console.log("Hola mundo");

// }, 1000);


const getUsuarioByID = (id, callback) => {


    const usuario = {
        id: id,

        nombre: "Jose"
    }

    setTimeout(() => {

        callback(usuario);

    }, 1000);


}

getUsuarioByID(10, (usuario) => {


    console.log(usuario);
    console.log(usuario.nombre.toUpperCase());
});