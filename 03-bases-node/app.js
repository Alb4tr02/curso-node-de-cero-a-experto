const fs = require('fs');
const { crearArchivo } = require('./utils/multiplicar.js');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
    })
    .check((argv, options) => {
        if (isNaN(argv.b))
            throw 'La base debe ser un número';
        return true;
    })
    .argv

console.clear()
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));