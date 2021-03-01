const axios = require("axios")
const { config } = require('../config/index')

class OpenWeatherMapLib {

  constructor(){
    this.key = config.rapidapiKey
    this.host = config.rapidapiHost

    this.requestConfig = {
      method: 'GET',
      url: `https://${config.rapidapiHost}`,
      headers: {
        'x-rapidapi-key': config.rapidapiKey,
        'x-rapidapi-host': config.rapidapiHost
      }
    }
  }

  async fetch(params, endpoint){

    try {

      const url = `${this.requestConfig.url}/${endpoint}`
      const axiosConfig = { ...this.requestConfig, params, url }
      const { data, status } = await axios(axiosConfig)

      return { data, status }

    } catch (error) {

      console.error(error.response.data.message)

      return { message: `${error.response.data.message}`, data: {}, status: error.response.status}

    }
  }

  getCurrentWeatherData(params){

    const endpoint = 'weather'

    return this.fetch( params, endpoint )
  }

  getHistoricalWeatherData(params){

    const endpoint = 'onecall/timemachine'

    return this.fetch( params, endpoint )
  }

  getTimedForecastData(params){

    const endpoint = 'forecast'

    return this.fetch( params, endpoint )
  }

}

module.exports = OpenWeatherMapLib
