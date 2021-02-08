const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + address + '&appid=01624ed238e214d78dd912edc0a5ad52'
    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.cod === '404') {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            
            callback(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                country: body.sys.country,
                temp:body.main.temp,
                humidity:body.main.humidity
            })
        }
    })
}

module.exports = geocode