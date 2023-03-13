import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import makeDataSelector from '../../store/makeDataSelector';

import Sidebar from '../Sidebar';
import Board from '../Board';

import { store } from '../../store';
import pr from '../../mock/projects';

export type TypeProject = {
  id: number;
  name: string;
  owner: number;
  address: string;
  likes: never[];
  users: number[];
  modules: string[];
};

const projectSelector = makeDataSelector('project');

export default function Workplace() {
  const { project } = useSelector(projectSelector);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    store.dispatch({ type: 'project/setProject', payload: project });
    store.dispatch({ type: 'project/setProjects', payload: pr });
  }, []);

  return (
    <section>
      <div className="board">
        <div className={`board__sidebar${sidebar ? ' board__sidebar_hidden' : ''}`}>
          <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        </div>
        <div className="board__main">
          {project ? (<Board />) : <div>Tmp</div>}
        </div>
      </div>
    </section>
  );
}
