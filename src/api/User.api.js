import api from './';

export function get(userId) {
  return api.get(`/user/${userId}`);
};
