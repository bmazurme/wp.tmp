import React from 'react';

import Module from '../Module';

import { ProjectType } from '../Workplace';

export default function Board({ project }: { project: ProjectType | null }) {
  return (
    <ul className="modules">
      {project?.modules.map((module) => (<Module key={module} module={module} />))}
    </ul>
  );
}
