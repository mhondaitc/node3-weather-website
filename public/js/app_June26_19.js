console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    response.json().then((data) => {
        if (data.error){
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)  
        }
    })
})