import React from 'react';

import style from './chip.module.css';

export default function Chip({ label, className }
  : { label: string, className?: string }) {
  return (
    <div className={`${style.chip} ${className ?? ''}`}>
      <div className="chip__label">{label}</div>
    </div>
  );
}
