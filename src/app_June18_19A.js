const path = require('path')
const express = require('express')

console.log(__dirname)
// console.log(__filename)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(path.join(publicDirectoryPath)))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John Sith'
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
        helpText: 'Helpful message'
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

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})