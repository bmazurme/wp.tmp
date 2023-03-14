import React from 'react';

export default function Chip({ label }: Record<string, string>) {
  return (
    <div className="chip">
      <div className="chip__label">{label}</div>
    </div>
  );
}
