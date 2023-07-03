import React from 'react';

import Content from '../../components/content';
import Workplace from '../../layouts/workplace';
import withUser from '../../hocs/with-user';

function WorkplacePage() {
  return (<Content children={<Workplace />} />);
}

export default withUser(WorkplacePage, true);
