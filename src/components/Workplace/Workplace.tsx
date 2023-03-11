import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import Board from '../Board';
import Popup from '../Popup';
import ProjectAdd from '../ProjectAdd';

import projects from '../../mock/projects';
import options from '../../mock/options';

export type TypeProject = {
  id: number;
  name: string;
  owner: number;
  address: string;
  likes: never[];
  users: number[];
  modules: string[];
};

export default function Workplace() {
  const [items, setItems] = useState(projects);
  const [filter, setFilter] = useState([options[0], options[1], options[2]]);
  const [popupAddProject, setPopupAddProject] = useState(false);
  const [project, setProject] = useState<TypeProject | null>(null);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  const openProject = (currentProject: TypeProject) => {
    setProject(currentProject);
  };
  const openPopupAddProject = () => setPopupAddProject(true);
  const closePopupAddProject = () => setPopupAddProject(false);

  return (
    <section>
      <div className="board">
        <div className={`board__sidebar${sidebar ? ' board__sidebar_hidden' : ''}`}>
          <Sidebar
            openPopupAddProject={openPopupAddProject}
            openProject={openProject}
            sidebar={sidebar}
            toggleSidebar={toggleSidebar}
            project={project}
            items={items}
          />
        </div>
        <div className="board__main">
          {project
            ? (
              <Board
                project={project}
                options={options}
                filter={filter}
                setFilter={setFilter}
              />
            )
            : <div>Tmp</div>}
        </div>
      </div>
      <Popup
        isOpen={popupAddProject}
        onClose={closePopupAddProject}
        children={(<ProjectAdd items={items} setItems={setItems} />)}
      />
    </section>
  );
}
