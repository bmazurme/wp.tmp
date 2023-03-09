import React from 'react';

import SearchForm from '../SearchForm';
import { ProjectType } from '../Workplace';

export default function BoardHeader({ project }: { project: ProjectType | null }) {
  const onEditProjectName = (e: any) => console.log(e);

  return (
    <div className="main__header">
      <input className="project__name" value={project?.name} onChange={onEditProjectName} />
      <SearchForm searchType="module" />
      <button
        aria-label="alarm"
        className="button_alarm"
        type="button"
        onClick={() => console.log(0)}
      />
      <button
        aria-label="history"
        className="button_history"
        type="button"
        onClick={() => console.log(0)}
      />
      <button
        aria-label="help"
        className="button_help"
        type="button"
        onClick={() => console.log(0)}
      />
    </div>
  );
}
