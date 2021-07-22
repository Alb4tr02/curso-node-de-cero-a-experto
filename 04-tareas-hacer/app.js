require('colors');

const { inquirerMenu } = require('./helpers/inquirer.js');

console.clear();

const main = async () => {
    
    console.log('Hola mundo');
    let input = ""
    while (input != "0") {
        input = await inquirerMenu();
        console.log(input);    
    }
    

}

main();