const express = require('express');
const config = require('./config');

const app = express();

const { app: appConfig } = config;
const { port } = appConfig;

app.get('/', (req, res) => {
  res.send("It's alive 😌");
});

app.listen(port, () => console.log(`App is running on port ${port} 😎 ...`));
