const app = require('./index')
const port = 8081;

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});