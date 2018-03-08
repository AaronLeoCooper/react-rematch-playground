import api from '../api/User.api';

export default {
  state: {
    loggedIn: false,
    error: ''
  },
  reducers: {
    loggedIn(state, payload) {
      return {
        ...state,
        loggedIn: true,
        userData: payload
      };
    },
    loggedOut(state) {
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
    async startLogIn() {
      this.removeError();

      try {
        const data = await api.get();

        this.loggedIn(data);
      } catch (err) {
        this.addError(err);
      }
    }
  }
};
