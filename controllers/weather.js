const axios = require('axios')

class WeatherController {
    static getWeather(req, res) {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?id=${process.env.WEATHER_CITY_ID}&appid=${process.env.WEATHER_OWN_APP_ID}&units=metric`)
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = WeatherController