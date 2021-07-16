const fs = require('fs');
const { crearArchivo } = require('./utils/multiplicar.js');

const factor = 2;
console.clear()
crearArchivo(factor)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

let arr = [1];

const [,,, test] = arr
const test2 = arr[0]
console.log(test, test2);