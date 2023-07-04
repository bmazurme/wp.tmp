import React, { ReactNode, useState } from 'react';

import Popup from '../popup';
import buttons, { TypeButton } from './buttons';

export default function ProjectMenu() {
  const [popup, setPopup] = useState(false);
  const [form, setForm] = useState<ReactNode | null>(null);
  const openPopup = (name: ReactNode) => {
    setForm(name);
    setPopup(true);
  };
  const closePopup = () => setPopup(false);

  return (
    <>
      {buttons.map(({ ariaLabel, className, node }: TypeButton) => (
        <button
          key={ariaLabel}
          aria-label={ariaLabel}
          className={className}
          type="button"
          onClick={() => openPopup(node)}
        />
      ))}
      <Popup isOpen={popup} onClose={closePopup} children={form} />
    </>
  );
}
