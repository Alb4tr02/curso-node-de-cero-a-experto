const fs = require('fs');

const crearArchivo = async (base = 5, listar) => {

    let salida = '';
    for (let i = 1; i <= 10; i++)
        salida += `${base} x ${i} = ${base * i}\n`;
    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        if (listar)
            console.log(salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = { crearArchivo };