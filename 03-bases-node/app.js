const fs = require('fs');
const { crearArchivo } = require('./utils/multiplicar.js');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    }).argv

console.clear()
console.log(argv);
crearArchivo(argv.b)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));