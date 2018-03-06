const path = require('path');

require('dotenv').config(path.join(__dirname, '../.env.development.local'));

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser);
app.use(morgan('dev'));

app.use((req, res, next) => {
  next();
});

const { API_PORT } = process.env;

app.listen(API_PORT, () => {
  console.info(`API serving at port ${API_PORT}`);
});
