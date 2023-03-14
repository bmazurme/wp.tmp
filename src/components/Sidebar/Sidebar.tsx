import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import makeDataSelector from '../../store/makeDataSelector';
import { store } from '../../store';

import Popup from '../Popup';
import List from '../List';
import ProjectAdd from '../ProjectAdd';

import { TypeProject } from '../Workplace';

const projectSelector = makeDataSelector('project');

export default function Sidebar({ toggleSidebar, sidebar }: {
  toggleSidebar: () => void, sidebar: boolean }) {
  const { project, projects } = useSelector(projectSelector);
  const [popupAddProject, setPopupAddProject] = useState(false);
  const openPopupAddProject = () => setPopupAddProject(true);
  const closePopupAddProject = () => setPopupAddProject(false);
  const openProject = (current: TypeProject) => store.dispatch({ type: 'project/setProject', payload: current });

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
      <button type="button" onClick={openPopupAddProject} className="button_add">
        {sidebar ? '+' : 'Add projects'}
      </button>
      <List
        items={projects}
        item={project}
        openProject={openProject}
        sidebar={sidebar}
      />
      <div className="banner">{sidebar ? '' : 'Banner'}</div>
      <Popup
        isOpen={popupAddProject}
        onClose={closePopupAddProject}
        children={(<ProjectAdd items={projects} />)}
      />
    </div>
  );
}
