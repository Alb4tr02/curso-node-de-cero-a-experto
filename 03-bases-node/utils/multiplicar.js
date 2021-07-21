const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    let salida = '';

    if (listar) {
        console.log("============================================================".white.bold.bgGray);
        console.log(`                         TABLA DEL ${base}                        `.white.bold.bgGray);
        console.log("============================================================".white.bold.bgGray);
    }

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        if (listar)
            console.log(`\t\t\t${base}`.bold.white, "x".bold.red, `${i}`.bold.white, "\t=".bold.green, `${base * i}`.bold.white);
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `./salida/tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = { crearArchivo };