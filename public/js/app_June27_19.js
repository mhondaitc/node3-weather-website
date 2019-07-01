console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log('testing!')
    console.log(location)

    // fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if (data.error){
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)  
        }
    })
})

})