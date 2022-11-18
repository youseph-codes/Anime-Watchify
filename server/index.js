<<<<<<< HEAD
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
app
=======
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const animeRouter = require('./routes/movie-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', animeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
>>>>>>> 7f973b4ff5a74d9cdca8e1418f7b277c48fd71c3
