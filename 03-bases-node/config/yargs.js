const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b))
            throw 'La base debe ser un número';
        return true;
    })
    .argv

module.exports = argv;