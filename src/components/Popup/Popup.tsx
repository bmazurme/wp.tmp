import React from 'react';
import type { PropsWithChildren } from 'react';

export default function Popup({ onClose, isOpen, children }
  : PropsWithChildren & { isOpen: boolean, onClose: () => void }) {
  return (
    <div className={`popup popup_tooltip ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__container">
        <button
          aria-label="Close"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <div className="tooltip">
          {children}
        </div>
      </div>
    </div>
  );
}
