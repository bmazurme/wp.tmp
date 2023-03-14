import React from 'react';

import './card.css';

export default function Card({ card }: { card: TypeProject }) {
  return (
    <li className="card">
      <h2 className="card__title">{card.name}</h2>
      <ul className="card__modules">
        {card.modules.map((module) => <li key={module}>{module}</li>)}
      </ul>
      {card.likes}
    </li>
  );
}
