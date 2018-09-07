const axios = require('axios');

const getWeather = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=56bd8125222a961b22e6932dc5a0a491`)

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}