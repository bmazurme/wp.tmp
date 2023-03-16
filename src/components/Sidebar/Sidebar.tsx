import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import makeDataSelector from '../../store/makeDataSelector';
import { store } from '../../store';

import ButtonAdd from '../ButtonAdd';
import List from '../List';
import Banner from '../Banner';

const projectSelector = makeDataSelector('project');

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(localStorage.getItem('wp-sidebar') === 'true');
  const { project, projects } = useSelector(projectSelector);
  const openProject = (current: TypeProject) => store.dispatch({ type: 'project/setProject', payload: current });

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    localStorage.setItem('wp-sidebar', !sidebar ? 'true' : 'false');
  };

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
      <ButtonAdd sidebar={sidebar} projects={projects} />
      <List
        items={projects}
        item={project}
        openProject={openProject}
        sidebar={sidebar}
      />
      <Banner sidebar={sidebar} />
    </div>
  );
}
