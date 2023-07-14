import React from 'react';

import Module from '../module';

export default function Board({ modules }: { modules: string[] }) {
  return (
    <ul className="modules">
      {modules.map((module) => (<Module key={module} module={module} />))}
    </ul>
  );
}
