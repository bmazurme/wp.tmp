import React from 'react';

import Button from '../../../components/button';

const buttons = ['Print', 'Share'];

export default function TempSidebar() {
  return (
    <>
      {buttons.map((x) => (
        <Button
          isValid
          className="button_small"
          value={x}
          key={x}
        />
      ))}
    </>
  );
}
