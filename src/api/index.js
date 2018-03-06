import axios from 'axios';

const { API_PORT } = process.env;

export default axios.create({
  baseURL: `http://localhost:${API_PORT}`
});
