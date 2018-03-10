import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileContainer from '../ProfileContainer';

import LoginForm from '../../components/LoginForm';

import './App.css';

class App extends React.Component {

  static propTypes = {
    isLoggingIn: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    error: PropTypes.string
  }

  renderError = () => {
    return <div className="App__error">{this.props.error}</div>;
  }

  renderLoggingIn = () => {
    return <div className="App__loggingIn">Logging you in...</div>
  }

  renderLoginForm = () => <LoginForm {...this.props} />;

  renderProfile = () => <ProfileContainer />;

  render() {
    const {
      error,
      isLoggingIn,
      isLoggedIn
    } = this.props;

    return (
      <div className="App">
        { error && this.renderError() }
        { isLoggingIn && this.renderLoggingIn() }
        { !isLoggedIn && this.renderLoginForm() }
        { isLoggedIn && this.renderProfile() }
      </div>
    );
  }

}

export default connect(
  ({ User }) => ({ ...User }),
  ({ User }) => ({ startLogIn: User.startLogIn })
)(App);
