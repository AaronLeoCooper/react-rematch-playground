import api from '../api/User.api';

export const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  error: '',
  userData: {}
};

export const reducers = {
  startLoggingIn(state) {
    return {
      ...state,
      isLoggingIn: true
    };
  },
  stopLoggingIn(state) {
    return {
      ...state,
      isLoggingIn: false
    };
  },
  loggedIn(state, payload) {
    return {
      ...state,
      isLoggedIn: true,
      userData: payload
    };
  },
  logOut() {
    return initialState;
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
};

export const effects = {
  async startLogIn() {
    this.removeError();
    this.startLoggingIn();

    try {
      const res = await api.get();

      this.loggedIn(res.data);
    } catch (err) {
      this.addError(err.toString());
    }

    this.stopLoggingIn();
  }
}

export default {
  state: initialState,
  reducers,
  effects
};
