/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import projects from '../../mock/projects';

type Project = {
  id: number;
  name: string;
  owner: number;
  adress: string;
  likes: never[];
  users: number[];
  modules: string[];
};

export default function Board() {
  const [project, setProject] = useState<Project | null>(null);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  const openProject = (currentProject: Project) => {
    setProject(currentProject);
  };

  return (
    <section>
      <h2 className="title">Title</h2>
      <div className="board">
        <div className={`board__sidebar${sidebar ? ' board__sidebar_hidden' : ''}`}>
          <div className="sidebar">
            <div className="sidebar__header">
              {sidebar ? '' : 'Projects'}
              <button type="button" onClick={toggleSidebar} className="sidebar__button">
                {sidebar ? '>' : '<'}
              </button>
            </div>
            <div className="sidebar__add">+</div>
            {sidebar
              ? null
              : (
                <ul className="sidebar__list">
                  {projects.map((pr: Project) => (
                    <li className="item" onClick={() => openProject(pr)} key={pr.id}>
                      {pr.name}
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </div>
        <div className="board__main">
          <div className="main__header">search notification help history</div>
          <h3 className="main__title">
            {project?.name}
            <div>auto</div>
            <div>users</div>
            <span className="button_settings">...</span>
          </h3>
          <ul>
            {project?.modules.map((module) => (
              <li key={module}>
                {module}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
