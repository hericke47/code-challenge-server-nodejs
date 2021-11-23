const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/temperature/:id', (req, res) => {
  fetch(
    `https://temperature-sensor-service.herokuapp.com/sensor/${req.params.id}`
  )
    .then((response) => response.json())
    .then((response) => res.send(response));
});

module.exports = app