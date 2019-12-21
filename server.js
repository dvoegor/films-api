require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())
app.use(express.static('public'));

const filmRouter = require('./routes/films')
app.use('/films', filmRouter)

const logsRouter = require('./routes/logs')
app.use('/logs', logsRouter)

app.listen(80, () => console.log('Server Started'))