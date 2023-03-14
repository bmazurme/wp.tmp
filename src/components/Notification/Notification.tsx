import React from 'react';

import List from '../List';
import notification from '../../mock/notification';

export default function Notification() {
  return (
    <>
      <h2 className="title">Notification</h2>
      <List
        item={null}
        items={notification}
        openProject={(e) => console.log(e)}
      />
    </>
  );
}
