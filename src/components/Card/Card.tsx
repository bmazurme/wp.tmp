import React from 'react';

import Chip from '../Chip';

export default function Card({ card }: { card: TypeProject }) {
  return (
    <li className="card">
      <h2 className="card__title">{card.name}</h2>
      <ul className="card__tags">
        {card.modules.map((module) => (
          <li key={module} className="card__tag">
            <Chip label={module} />
          </li>
        ))}
      </ul>
      {card.likes}
    </li>
  );
}
