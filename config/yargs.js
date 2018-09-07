const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        demand: true,
        descripcion: 'Ciudad de la que se quiere saber el clima'
    }
}).argv;

module.exports = {
    argv
}