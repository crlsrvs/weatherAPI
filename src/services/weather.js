const OpenWeatherMapLib = require('../lib/rapidapi')

class WeatherService {
  constructor(){
    this.weatherLib = new OpenWeatherMapLib()
  }

  async getWeather(params){

    const weatherData = await this.weatherLib.getCurrentWeatherData(params)

    return weatherData

  }

  async getHistorical(params){

    const historicalData = await this.weatherLib.getHistoricalWeatherData(params)

    return historicalData

  }

  async getForecast(params){

    const forecastData = await this.weatherLib.getTimedForecastData(params)

    return forecastData

  }
}

module.exports = WeatherService
