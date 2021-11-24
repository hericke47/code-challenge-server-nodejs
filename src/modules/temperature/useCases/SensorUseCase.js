const fetch = require('node-fetch');

class SensorUseCase {
  async execute({ id }) {
    try {
      const temperature = await fetch(
        `https://temperature-sensor-service.herokuapp.com/sensor/${id}`
      )
      .then((response) => response.json())

      return temperature
    } catch(error) {
      throw new Error('Not possible to find temperature on sensor')
    }
  }
}

module.exports = SensorUseCase