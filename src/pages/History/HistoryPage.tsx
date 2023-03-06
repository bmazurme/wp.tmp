import React from 'react';

import Content from '../../components/Content';
import History from '../../components/History';
import withUser from '../../hoc/withUser';

function HistoryPage() {
  return (<Content children={<History />} />);
}

export default withUser(HistoryPage, true);
