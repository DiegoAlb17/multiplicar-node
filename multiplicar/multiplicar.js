const fs = require('fs');

let listar = (base, limite) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    console.log(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}