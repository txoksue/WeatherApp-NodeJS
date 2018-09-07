const argv = require('./config/yargs').argv;
const colors = require('colors');
const place = require('./place/place');
const weather = require('./weather/weather');

const getInfoWeather = async(ciudad) => {

    try {

        let coords = await place.getPlaceLatLng(ciudad);
        let temp = await weather.getWeather(coords.lat, coords.lng);

        return `La temperatura en este momento en ${coords.direccion} es de ${temp} ºC.`.green;

    } catch (e) {

        return `No se puedo determinar el clima en ${ciudad}`.red;
    }


}

getInfoWeather(argv.ciudad)
    .then(resp => {
        console.log(resp);
    })
    .catch(error => {
        console.log(error);
    })