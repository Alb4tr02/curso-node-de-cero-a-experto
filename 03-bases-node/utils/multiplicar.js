const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar) => {

    let salida = '';
    const header = "============================================================\n"
        + `                         TABLA DEL ${base}                        \n`
        + "============================================================"
    if (listar)
        console.log(header.white.bold.bgGray);
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        if (listar)
            console.log(`\t\t\t${base}`.bold.white, "x".bold.red, `${i}`.bold.white, "\t=".bold.green, `${base * i}`.bold.white);
    }

    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = { crearArchivo };