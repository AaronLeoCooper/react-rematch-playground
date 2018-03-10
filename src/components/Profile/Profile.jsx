import React from 'react';
import PropTypes from 'prop-types';

import './Profile.css';

class Profile extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    sign: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    logOut: PropTypes.func.isRequired
  }

  render() {
    const {
      name,
      role,
      sign,
      imageUrl,
      logOut
    } = this.props;

    return (
      <div className="Profile__container">
        <h1>{name}</h1>
        <h2>Role: {role}</h2>
        <h2>Sign: {sign}</h2>
        <img
          src={imageUrl}
          className="Profile__image"
          alt={`${name} profile`}
        />
        <button
          onClick={logOut}
          className="Profile__logoutButton"
        >
          Log Out
        </button>
      </div>
    );
  }

}

export default Profile;
