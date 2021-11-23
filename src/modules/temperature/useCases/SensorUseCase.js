const fetch = require('node-fetch');

class SensorUseCase {
  async execute({ id }) {
    const temperature = await fetch(
      `https://temperature-sensor-service.herokuapp.com/sensor/${id}`
    ).then((response) => response.json())

    return temperature
  }
}

module.exports = SensorUseCase