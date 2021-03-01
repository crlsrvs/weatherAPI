const express = require('express')
const cors = require('cors')

const { config } = require('./config/index')
const weatherApi = require('./routes/weather')

const app = express()

app.use(cors())
app.use(express.json())

weatherApi(app)

// app.listen(config.port, function() {
//   console.log(`Listening http://localhost:${config.port}`)
// })

module.exports = app