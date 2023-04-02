import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sidebar from '../Sidebar';
import Board from '../Board';
import Cards from '../Cards';

import makeDataSelector from '../../store/makeDataSelector';
import { store } from '../../store';

import projects from '../../mock/projects';

const projectSelector = makeDataSelector('project');

export default function Workplace() {
  const { project } = useSelector(projectSelector);

  useEffect(() => {
    store.dispatch({ type: 'project/setProject', payload: project });
    store.dispatch({ type: 'project/setProjects', payload: projects });
  }, []);

  return (
    <div className="board">
      <div className="board__sidebar">
        <Sidebar />
      </div>
      <div className="board__main">
        {project ? (<Board />) : <Cards />}
      </div>
    </div>
  );
}
