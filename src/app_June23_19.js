const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
// console.log(__filename)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config.
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(path.join(publicDirectoryPath)))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John Smith'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'John Smith'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is helpful message',
        title: 'Help',
        name: 'John Smith'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Rain and 25 degree',
        location: 'San Francisco'
    })
})


// app.com
// app.com/help
// app.com/about


app.get('/help/*', (req, res) => {
    // res.send('Help article not found')
    res.render('404', {
        title: '404',
        name: 'John Smith',
        errorMessage: 'Help article not found.'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'John Smith',
        errorMessage: 'Page not found.'
    })

})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})