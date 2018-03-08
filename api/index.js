const path = require('path');

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./router');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', router);

const { API_PORT } = process.env;

app.listen(API_PORT, () => {
  console.info(`API serving at port ${API_PORT}`);
});
