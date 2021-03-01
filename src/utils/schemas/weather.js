const Joi = require('joi')

const currentWeatherScheme = Joi.object({
  q: Joi.string().required(),
  lat: Joi.number(),
  lon: Joi.number(),
  id: Joi.number(),
  lang: Joi.string(),
  units: Joi.string().valid('metric', 'imperial')
})


const historicalWeatherScheme = Joi.object({
  lat: Joi.number().required(),
  lon: Joi.number().required(),
  dt: Joi.number().required(),
})


const forecastWeatherScheme = Joi.object({
  q: Joi.string(),
  units: Joi.string().valid('standard', 'metric', 'imperial'),
  lat: Joi.number(),
  lon: Joi.number(),
  lang: Joi.string(),
  cnt: Joi.number(),
  id: Joi.number(),
  zip: Joi.number()
})


module.exports = {
  currentWeatherScheme,
  historicalWeatherScheme,
  forecastWeatherScheme
}