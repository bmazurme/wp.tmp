import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../card';
import makeDataSelector from '../../store/make-data-selector';

const projectSelector = makeDataSelector('project');

export default function Cards() {
  const { projects } = useSelector(projectSelector);

  return (
    <ul className="cards">
      {projects.map((card) => (<Card key={card.name} card={card} />))}
    </ul>
  );
}
