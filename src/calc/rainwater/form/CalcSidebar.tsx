import React from 'react';

import Button from '../../../components/Button';

export default function CalcSidebar() {
  return (
    <>
      <Button isValid className="button_small" value="Status" />
      <Button isValid className="button_small" value="Calc 1" />
      <Button isValid className="button_small" value="Calc 2" />
      <Button isValid className="button_small" value="Calc 3" />
      <Button isValid className="button_small" value="Template" />
      <Button isValid className="button_small" value="Export" />
      <Button isValid className="button_small" value="Share" />
    </>
  );
}
