const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/2088ad98dbb6da595f50638507658fc6/37.8267,-122.4233'
    const url = 'https://api.darksky.net/forecast/2088ad98dbb6da595f50638507658fc6/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({ url: url, json: true }, (error, response)=> {
        if (error) {
            callback('Unable to connect to weather service for forecast!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location for forecast', undefined)
        } else {
            // console.log('Today: ' + response.body.daily.data[0].summary)
            // console.log('It is currently ' + response.body.currently.temperature + ' degrees out.')
            // console.log('There is a ' + response.body.currently.precipProbability + '% chance of rain.')
            // callback(undefined, {
                // today: response.body.daily.data[0].summary,
                // current: response.body.currently.temperature,
                // probability: response.body.currently.precipProbability,
                // timezone: response.body.timezone
            // })
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is ' + response.body.currently.precipProbability + '% chance of rain.')
        } 
    })
}

module.exports = forecast