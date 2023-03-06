import React from 'react';

import PasswordUpdate from '../../components/PasswordUpdate';
import withUser from '../../hoc/withUser';

function PasswordUpdatePage() {
  return (<PasswordUpdate />);
}

export default withUser(PasswordUpdatePage, true);
