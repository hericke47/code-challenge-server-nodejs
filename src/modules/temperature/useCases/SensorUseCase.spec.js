const SensorUseCase = require('./SensorUseCase')

describe('Temperature', () => {
  beforeEach(() => {
    sensorUseCase = new SensorUseCase();
});

  it('should be able to list temperature', async () => {
    const teste = await sensorUseCase.execute({
      id: 1
    });

    expect(teste).toHaveProperty('id');
  })
})
