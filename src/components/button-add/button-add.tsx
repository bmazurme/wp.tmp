import React, { useState } from 'react';
import Popup from '../popup';
import ProjectAdd from '../project-add';

export default function ButtonAdd({ sidebar, projects }
  : { sidebar: boolean, projects: TypeProject[] }) {
  const [popupAddProject, setPopupAddProject] = useState(false);
  const openPopupAddProject = () => setPopupAddProject(true);
  const closePopupAddProject = () => setPopupAddProject(false);

  return (
    <>
      <button
        type="button"
        onClick={openPopupAddProject}
        className={`button_add${sidebar ? ' button_hidden' : ''}`}
      >
        {sidebar ? '+' : 'Add'}
      </button>
      <Popup
        isOpen={popupAddProject}
        onClose={closePopupAddProject}
        children={(<ProjectAdd items={projects} />)}
      />
    </>
  );
}
