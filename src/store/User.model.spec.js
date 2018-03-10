import UserModel, {
  initialState,
  reducers,
  effects
} from './User.model';

import api from '../api/User.api';

test('state', () => {
  expect(typeof initialState).toBe('object');
  expect(UserModel.state).toBe(initialState);
});

describe('reducers', () => {
  const {
    startLoggingIn,
    stopLoggingIn,
    loggedIn,
    logOut,
    addError,
    removeError
  } = reducers;

  test('startLoggingIn', () => {
    const state = { isLoggingIn: false };
    const newState = startLoggingIn(state);

    expect(newState).toEqual({ isLoggingIn: true });
  });

  test('stopLoggingIn', () => {
    const state = { isLoggingIn: true };
    const newState = stopLoggingIn(state);

    expect(newState).toEqual({ isLoggingIn: false });
  });

  test('loggedIn', () => {
    const state = { isLoggedIn: false, userData: {} };
    const payload = { name: 'Test', role: 'Test' };
    const newState = loggedIn(state, payload);

    expect(newState).toEqual({
      isLoggedIn: true,
      userData: payload
    });
  });

  test('logOut', () => {
    const newState = logOut();

    expect(newState).toEqual(initialState);
  });

  test('addError', () => {
    const state = { error: '' };
    const payload = 'Test error';
    const newState = addError(state, payload);

    expect(newState).toEqual({
      error: 'Test error'
    });
  });

  test('removeError', () => {
    const state = { error: 'Test error' };
    const newState = removeError(state);

    expect(newState).toEqual({
      error: ''
    });
  });
});

describe('effects', () => {
  describe('startLogIn', () => {
    const mocks = {
      removeError: jest.fn(),
      startLoggingIn: jest.fn(),
      loggedIn: jest.fn(),
      addError: jest.fn(),
      stopLoggingIn: jest.fn()
    };

    const startLogIn = effects.startLogIn.bind(mocks);

    afterEach(() => {
      jest.resetAllMocks();
    });

    test('success', async () => {
      const res = { data: { name: 'Test' } };
      const getSpy = jest.spyOn(api, 'get')
        .mockImplementation(() => Promise.resolve(res));

      await startLogIn();

      expect(mocks.removeError).toHaveBeenCalledTimes(1);
      expect(mocks.startLoggingIn).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledTimes(1);

      expect(mocks.loggedIn).toHaveBeenCalledTimes(1);
      expect(mocks.loggedIn).toHaveBeenCalledWith(res.data);

      expect(mocks.stopLoggingIn).toHaveBeenCalledTimes(1);

      expect(mocks.addError).toHaveBeenCalledTimes(0);
    });

    test('error', async () => {
      const getSpy = jest.spyOn(api, 'get')
        .mockImplementation(() => Promise.reject(new Error('Test error')));

      await startLogIn();

      expect(mocks.removeError).toHaveBeenCalledTimes(1);
      expect(mocks.startLoggingIn).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledTimes(1);

      expect(mocks.addError).toHaveBeenCalledTimes(1);
      expect(mocks.addError).toHaveBeenCalledWith('Error: Test error');

      expect(mocks.stopLoggingIn).toHaveBeenCalledTimes(1);

      expect(mocks.loggedIn).toHaveBeenCalledTimes(0);
    });
  });
});
