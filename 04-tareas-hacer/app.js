require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes.js');

console.clear();

const main = async () => {
    
    console.log('Hola mundo');
    let input = ""
    while (input != "0") {
        input = await mostrarMenu();
        await pausa();    
    }
    

}

main();