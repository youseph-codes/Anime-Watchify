const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const animeRouter = require('./routes/anime-router')

const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('We are live!')
})

app.use('/api', animeRouter)

app.listen(apiPort, () => console.log(`Running on port ${apiPort}`))