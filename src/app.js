const express = require('express');
// const morgan = require('morgan');

const app = express();
// app.use(morgan('common'));
app.use(express.json());

app.post('/health', (_, res) => {
  res.send();
});

module.exports = app;
