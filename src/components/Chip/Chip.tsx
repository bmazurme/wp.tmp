import React from 'react';

export default function Chip({ label, className }
  : { label: string, className?: string }) {
  return (
    <div className={`chip ${className ?? ''}`}>
      <div className="chip__label">{label}</div>
    </div>
  );
}
