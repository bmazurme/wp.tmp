import React from 'react';

import Accordion from '../accordion';
import notification from '../../mock/notification';

export default function Notification() {
  return (
    <>
      <h2 className="title">Notification</h2>
      <Accordion data={notification} />
    </>
  );
}
