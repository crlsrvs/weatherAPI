require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  rapidapiKey: process.env.RAPIDAPI_KEY,
  rapidapiHost: process.env.RAPIDAPI_HOST
}

module.exports = { config }