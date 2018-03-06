import api from '../api/User.api';

export default {
  state: {
    loggedIn: false,
    error: ''
  },
  reducers: {
    logIn(state, payload) {
      return {
        ...state,
        loggedIn: true,
        userData: payload
      };
    },
    logOut(state) {
      return {
        loggedIn: false
      };
    },
    addError(state, payload) {
      return {
        ...state,
        error: payload
      };
    },
    removeError(state) {
      return {
        ...state,
        error: ''
      };
    }
  },
  effects: {
    async startLogIn(payload, rootState) {
      this.removeError();

      try {
        const data = await api.get(payload);

        this.logIn(data);
      } catch (err) {
        this.addError(err);
      }
    }
  }
};
