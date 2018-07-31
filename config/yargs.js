const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


//require
const argv = require('yargs')
    .command('crear', 'Imprime en consola la tabla de multiplicar', opt)
    .command('listar', `Crea un nuevo archivo con la tabla`, opt)
    .help()
    .argv;

module.exports = {
    argv
}