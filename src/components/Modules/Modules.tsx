import React from 'react';

import Module from '../Module';

export default function Board({ modules }: { modules: string[] }) {
  return (
    <ul className="modules">
      {modules.map((module) => (<Module key={module} module={module} />))}
    </ul>
  );
}
