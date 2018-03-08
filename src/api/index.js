import axios from 'axios';

const { API_PORT, API_HOST, API_PROTOCOL } = process.env;

const protocol = API_PROTOCOL || 'http';

const host = API_HOST
  ? API_HOST
  : 'localhost';

const port = API_PORT
  ? `:${API_PORT}`
  : '';

export default axios.create({
  baseURL: `${protocol}://${host}${port}`
});
