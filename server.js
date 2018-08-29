const express = require('express')
const app = express()

module.exports = app

const router = require('./routes')
app.use(express.static('public'))
app.use(express.static('node_modules/leaflet'))
app.use('/', router)
