import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import makeDataSelector from '../../store/makeDataSelector';
import { store } from '../../store';

import ProjectAdd from '../ProjectAdd';
import Popup from '../Popup';
import List from '../List';

const projectSelector = makeDataSelector('project');

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  const { project, projects } = useSelector(projectSelector);
  const [popupAddProject, setPopupAddProject] = useState(false);
  const openPopupAddProject = () => setPopupAddProject(true);
  const closePopupAddProject = () => setPopupAddProject(false);
  const openProject = (current: TypeProject) => store.dispatch({ type: 'project/setProject', payload: current });

  return (
    <div className={`sidebar${sidebar ? ' sidebar_hidden' : ''}`}>
      <div className="sidebar__header">
        <span className={`${sidebar ? 'sidebar__title_hidden' : 'sidebar__title'}`}>
          {sidebar ? '' : 'My projects'}
        </span>
        <button
          type="button"
          aria-label="Open"
          onClick={toggleSidebar}
          className={`sidebar__button${!sidebar ? ' sidebar__button_open' : ''}`}
        />
      </div>
      <button type="button" onClick={openPopupAddProject} className={`button_add${sidebar ? ' button_hidden' : ''}`}>
        {sidebar ? '+' : 'Add'}
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
