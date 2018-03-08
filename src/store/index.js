import { init } from '@rematch/core';

import User from './User.model';

const models = {
  User
};

const store = init({
  models
});

export default store;
