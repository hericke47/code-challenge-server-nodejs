const express = require('express')
const fetch = require('node-fetch');
const SensorController = require('../../../../modules/temperature/useCases/SensorController')

const temperatureRouter = express.Router();
const temperatureController = new SensorController()

temperatureRouter.get('/:id', temperatureController.handle);

module.exports = temperatureRouter