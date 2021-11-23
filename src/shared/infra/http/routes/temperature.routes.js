const express = require('express')
const fetch = require('node-fetch');

const temperatureRouter = express.Router();

temperatureRouter.get('/:id', (req, res) => {
  fetch(
    `https://temperature-sensor-service.herokuapp.com/sensor/${req.params.id}`
  )
    .then((response) => response.json())
    .then((response) => res.send(response));
});

module.exports = temperatureRouter