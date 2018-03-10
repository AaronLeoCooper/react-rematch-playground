require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', router);

const { REACT_APP_API_PORT } = process.env;

app.listen(REACT_APP_API_PORT, () => {
  console.info(`API serving at port ${REACT_APP_API_PORT}`);
});
