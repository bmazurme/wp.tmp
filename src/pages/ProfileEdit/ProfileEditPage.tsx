import React from 'react';

import ProfileEdit from '../../components/ProfileEdit';
import withUser from '../../hoc/withUser';

function ProfileEditPage() {
  return (<ProfileEdit />);
}

export default withUser(ProfileEditPage, true);
