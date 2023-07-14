/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { store } from '../../store';
import Chip from '../chip';

export default function Card({ card }: { card: TypeProject }) {
  const openProject = (current: TypeProject) => store.dispatch({ type: 'project/setProject', payload: current });

  return (
    <li className="card" onClick={() => openProject(card)}>
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
