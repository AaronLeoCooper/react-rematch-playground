import api from './';

function get(userId) {
  return api.get(`/user/${userId}`);
};

export default {
  get
};
