const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2088ad98dbb6da595f50638507658fc6/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?lang=zh&units=si'
    // request({ url: url, json: true }, (error, response)=> {
    request({ url, json: true }, (error, {body} )=> {
        if (error) {
            callback('Unable to connect to weather service for forecast!', undefined)
        // } else if (response.body.error) {
        } else if (body.error) {
            callback('Unable to find location for forecast', undefined)
        } else {
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability + '% chance of rain. + ')
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability + '% chance of rain.' + ' High temperature is ' + body.daily.data[0].temperatureHigh + '. Low temperature is ' + body.daily.data[0].temperatureLow + '.')
        } 
    })
}

module.exports = forecast