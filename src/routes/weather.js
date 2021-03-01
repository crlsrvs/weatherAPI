const express = require('express')
const WeatherService = require('../services/weather')

const {
  currentWeatherScheme,
  historicalWeatherScheme,
  forecastWeatherScheme
} = require('../utils/schemas/weather')

const validationHandler = require('../utils/middleware/validationHandler')


function weatherApi(app) {

  const router = express.Router()
  const weatherService = new WeatherService()

  app.use('/api/weather', router)


  router.get('/current', validationHandler(currentWeatherScheme, 'query'), async function(req, res, next) {

    try {

      const params = req.query
      const currentWeather = await weatherService.getWeather( params )
      const msg = currentWeather.status === 200 ? 'weather information retrieved' : currentWeather.message

      res.status(currentWeather.status).json({
        data: currentWeather.data,
        status: currentWeather.status,
        message: msg
      })

    } catch (error) {
      next(err)
    }
  })

  router.get('/historical', validationHandler(historicalWeatherScheme, 'query'), async function(req, res, next) {

    try {

      const params = req.query
      const historicalWeather = await weatherService.getHistorical( params )
      const msg = historicalWeather.status === 200 ? 'historical information retrieved' : historicalWeather.message

      res.status(historicalWeather.status).json({
        data: historicalWeather.data,
        status: historicalWeather.status,
        message: msg
      })

    } catch (error) {
      next(err)
    }
  })

  router.get('/forecast', validationHandler(forecastWeatherScheme, 'query'), async function(req, res, next) {

    try {

      const params = req.query
      const forecastWeather = await weatherService.getForecast( params )
      const msg = forecastWeather.status === 200 ? 'forecast information retrieved' : forecastWeather.message


      res.status(forecastWeather.status).json({
        data: forecastWeather.data,
        status: forecastWeather.status,
        message: msg
      })

    } catch (error) {
      next(err)
    }
  })


}

module.exports = weatherApi
