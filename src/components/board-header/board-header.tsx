import React from 'react';

import ProjectName from '../project-name';
import ProjectMenu from '../project-menu';
import SearchForm from '../search-form';

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
