import React from 'react';

import ProfileEdit from '../../layouts/profile-edit';
import withUser from '../../hocs/with-user';

function ProfileEditPage() {
  return (<ProfileEdit />);
}

export default withUser(ProfileEditPage, true);
