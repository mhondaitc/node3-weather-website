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

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'Rain and 25 degree',
//         location: 'San Francisco'
//     })
// })


// http://localhost:3000/weather?address=Philadelphia
app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    console.log(req.query.search)
    console.log(req.query.address)
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address
    })
})


// http://localhost:3000/products?search=games&rating=5
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query)
    console.log(req.query.search)
    console.log(req.query.rating)
    res.send({
        products: []
    })
})


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