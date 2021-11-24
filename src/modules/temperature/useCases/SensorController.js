const SensorUseCase = require('./SensorUseCase')

class SensorController {
  async handle(request, response) {
    const { id } = request.params;

    const sensorUseCase = new SensorUseCase()

    const sensor = await sensorUseCase.execute({
      id: id,
    });

    return response.json(sensor)
  }
}

module.exports = SensorController