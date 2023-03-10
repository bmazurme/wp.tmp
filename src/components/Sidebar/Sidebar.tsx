/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ProjectType } from '../Workplace';

export default function Sidebar({
  openPopupAddProject, openProject, toggleSidebar, sidebar, project, items,
}: {
  openPopupAddProject: () => void,
  openProject: (pr: ProjectType) => void,
  toggleSidebar: () => void,
  sidebar: boolean,
  project: ProjectType | null,
  items: ProjectType[],
}) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {sidebar ? '' : 'My projects'}
        <button
          aria-label="Open"
          type="button"
          onClick={toggleSidebar}
          className={`sidebar__button${!sidebar ? ' sidebar__button_open' : ''}`}
        />
      </div>
      <button type="button" onClick={openPopupAddProject} className="button_add">+</button>
      {sidebar
        ? null
        : (
          <ul className="list">
            {items.map((pr: ProjectType) => (
              <li
                className={`list__item${pr.id === project?.id ? ' list__item_active' : ''}`}
                onClick={() => openProject(pr)}
                key={pr.id}
              >
                {pr.name}
              </li>
            ))}
          </ul>
        )}
      <div className="banner">{sidebar ? '' : 'Banner'}</div>
    </div>
  );
}
