import React from 'react';

import Button from '../../../components/Button';

export default function TempSidebar() {
  return (
    <>
      <Button isValid className="button_small" value="Print" />
      <Button isValid className="button_small" value="Share" />
    </>
  );
}
