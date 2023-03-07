import React from 'react';

import Content from '../../components/Content';
import Workplace from '../../components/Workplace';
import withUser from '../../hoc/withUser';

function WorkplacePage() {
  return (<Content children={<Workplace />} />);
}

export default withUser(WorkplacePage, true);
