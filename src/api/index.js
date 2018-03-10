import axios from 'axios';

const {
  REACT_APP_API_PORT,
  REACT_APP_API_HOST,
  REACT_APP_API_PROTOCOL
} = process.env;

const protocol = REACT_APP_API_PROTOCOL || 'http';

const host = REACT_APP_API_HOST
  ? REACT_APP_API_HOST
  : 'localhost';

const port = REACT_APP_API_PORT
  ? `:${REACT_APP_API_PORT}`
  : '';

export default axios.create({
  baseURL: `${protocol}://${host}${port}`
});
