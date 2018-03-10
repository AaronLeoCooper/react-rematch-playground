import React from 'react';
import { connect } from 'react-redux';

import Profile from '../../components/Profile';

const ProfileContainer = (props) => <Profile {...props} />;

export default connect(
  ({ User }) => ({ ...User.userData }),
  ({ User }) => ({ logOut: User.logOut })
)(ProfileContainer);
