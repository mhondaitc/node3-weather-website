const path = require('path')
const express = require('express')

console.log(__dirname)
// console.log(__filename)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(path.join(publicDirectoryPath)))

// app.get('', (req, res) => {
//     // res.send('Hello express!')
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res) => {
//     // res.send('Help page')
//     // res.send({
//     //     name: 'Andrew',
//     //     age: 27
//     // })
//     res.send([{
//         name: 'Andrew',
//         age:27
//     },{
//         name: 'Sarah',
//         age:23
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

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