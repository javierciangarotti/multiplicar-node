// requires
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limit = 10) => {

    console.log('======================'.red);
    console.log(`==tabla de ${ base }==`.red);
    console.log(`======================`.red);

    let data = '';
    for (let i = 1; i <= limit; i++) {
        var mult = base * i
        data += `${ base } * ${ i } = ${ mult }\n`;
    }
    console.log(data);

}


let crearArchivo = (base, limit = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            var mult = base * i
            data += `${ base } * ${ i } = ${ mult }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limit}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}