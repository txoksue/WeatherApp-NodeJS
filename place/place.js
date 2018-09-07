const axios = require('axios');

const getPlaceLatLng = async(ciudad) => {

    let encodeDireccion = encodeURI(ciudad);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeDireccion}&key=AIzaSyDYON7dpbpcTUdTCyi4mDN35x1MWdmjHSc`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${ciudad}`);
    }

    let location = resp.data.results[0].geometry.location;
    let formatted_address = resp.data.results[0].formatted_address;

    return {
        direccion: formatted_address,
        lat: location.lat,
        lng: location.lng
    }
};



module.exports = {
    getPlaceLatLng
}