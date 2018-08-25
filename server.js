const express = require('express')
const app = express()

module.exports = app

const router = require('./routes')

app.use('/', router)
