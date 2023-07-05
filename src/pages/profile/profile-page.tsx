import React from 'react';

import Profile from '../../layouts/profile';
import withUser from '../../hocs/with-user';

function ProfilePage() {
  return (<Profile />);
}

export default withUser(ProfilePage, true);
