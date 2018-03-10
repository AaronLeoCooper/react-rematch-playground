import React from 'react';
import PropTypes from 'prop-types';

import './LoginForm.css';

class LoginForm extends React.Component {

  static propTypes = {
    isLoggingIn: PropTypes.bool,
    startLogIn: PropTypes.func
  }

  render() {
    const { isLoggingIn, startLogIn } = this.props;

    return (
      <div className="LoginForm__container">
        <button
          onClick={startLogIn}
          className="LoginForm__loginButton"
          disabled={isLoggingIn}
        >
          { isLoggingIn ? 'Please wait...' : 'Log in' }
        </button>
      </div>
    );
  }

}

export default LoginForm;
