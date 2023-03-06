import React from 'react';

import Content from '../../components/Content';
import Board from '../../components/Board';
import withUser from '../../hoc/withUser';

function BoardPage() {
  return (<Content children={<Board />} />);
}

export default withUser(BoardPage, true);
