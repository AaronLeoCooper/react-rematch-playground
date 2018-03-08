import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component {

  static propTypes = {
    loggedIn: PropTypes.bool,
    error: PropTypes.string,
    userData: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      sign: PropTypes.string
    })
  }

  componentDidMount() {
    this.props.startLogIn();
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }

}

export default connect(
  ({ User }) => ({
    ...User
  }),
  ({ User }) => ({ startLogIn: User.startLogIn })
)(App);
