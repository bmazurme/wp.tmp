import React from 'react';

import ProjectName from '../ProjectName';
import SearchForm from '../SearchForm';
import ProjectMenu from '../ProjectMenu';

export default function BoardHeader({ project }
  : { project: TypeProject | null }) {
  return (
    <div className="main__header">
      <ProjectName project={project} />
      <SearchForm searchType="module" />
      <ProjectMenu />
    </div>
  );
}
