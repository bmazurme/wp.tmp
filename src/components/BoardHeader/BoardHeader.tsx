import React from 'react';

import ProjectName from '../ProjectName';
import ProjectMenu from '../ProjectMenu';
import SearchForm from '../SearchForm';

export default function BoardHeader({ project }
  : { project: TypeProject | null }) {
  return (
    <div className="main__header">
      <ProjectName project={project} />
      <SearchForm />
      <ProjectMenu />
    </div>
  );
}
