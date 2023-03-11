/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { TypeProject } from '../Workplace';

import List from '../List';

export default function Sidebar({
  openPopupAddProject, openProject, toggleSidebar, sidebar, project, items,
}: {
  openPopupAddProject: () => void,
  openProject: (pr: TypeProject) => void,
  toggleSidebar: () => void,
  sidebar: boolean,
  project: TypeProject | null,
  items: TypeProject[],
}) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <span className={`${sidebar ? 'sidebar__title_hidden' : 'sidebar__title'}`}>
          {sidebar ? '' : 'My projects'}
        </span>
        <button
          aria-label="Open"
          type="button"
          onClick={toggleSidebar}
          className={`sidebar__button${!sidebar ? ' sidebar__button_open' : ''}`}
        />
      </div>
      <button type="button" onClick={openPopupAddProject} className="button_add">+</button>
      <List
        items={items}
        openProject={openProject}
        project={project}
        sidebar={sidebar}
      />
      <div className="banner">{sidebar ? '' : 'Banner'}</div>
    </div>
  );
}
