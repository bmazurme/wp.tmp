import React from 'react';

import PasswordUpdate from '../../layouts/password-update';
import withUser from '../../hocs/with-user';

function PasswordUpdatePage() {
  return (<PasswordUpdate />);
}

export default withUser(PasswordUpdatePage, true);
