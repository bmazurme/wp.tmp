import React from 'react';

import List from '../list';
import history from '../../mock/history';

export default function History() {
  return (
    <>
      <h2 className="title">History</h2>
      <List
        item={null}
        items={history}
        openProject={(e: any) => console.log(e)}
      />
    </>
  );
}
