import api from './';

export function get() {
  return api.get('/user');
}

export default {
  get
};
