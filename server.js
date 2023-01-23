const PORT = process.env.PORT || 3000

const express = require('express')
const app = express()

const https = require('https')

const instrument = {
    instruments: [
        {
            "Name":"Guitarr",
            "Kind": "stroke instrument"
        },
        {
            "Name":"Piano",
            "Kind":"plingplong instrument"
        },
        {
            "Name":"Violin",
            "Kind": "string instrument"
        }
    ]
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/instruments', (req, res) => {
    res.send(instrument)
})

app.get('/joke', (req, res) => {
    https.get('https://api.chucknorris.io/jokes/random', (response) => {
        response.on('data', (data) => {
            res.send(JSON.parse(data))
        })
    })
    .on('error', (err) => {
        console.log(err.message)
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
