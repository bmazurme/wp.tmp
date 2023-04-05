import React from 'react';

import Button from '../../../components/Button';

const buttons = [
  'Status', 'Calc 1', 'Calc 2', 'Calc 3', 'Template', 'Export', 'Share',
];

export default function CalcSidebar() {
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
