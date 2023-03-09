import React, { useState } from 'react';

import ProjectEdit from '../ProjectEdit';
import ProjectUsersEdit from '../ProjectUsersEdit';
import ProjectFiltersEdit from '../ProjectFiltersEdit';

import BoardHeader from '../BoardHeader';
import Popup from '../Popup';
import Modules from '../Modules';

import { ProjectType } from '../Workplace';

export default function Board({ project }: { project: ProjectType | null }) {
  const [popupEditProject, setPopupEditProject] = useState(false);
  const [popupEditFilter, setPopupEditFilter] = useState(false);
  const [popupEditUsers, setPopupEditUsers] = useState(false);

  const openPopupEditProject = () => setPopupEditProject(true);
  const closePopupEditProject = () => setPopupEditProject(false);
  const openPopupEditFilter = () => setPopupEditFilter(true);
  const closePopupEditFilter = () => setPopupEditFilter(false);
  const openPopupEditUsers = () => setPopupEditUsers(true);
  const closePopupEditUsers = () => setPopupEditUsers(false);

  return (
    <>
      <BoardHeader project={project} />
      <h3 className="main__title">
        <button
          aria-label="Filter"
          className="button_filter"
          type="button"
          onClick={openPopupEditFilter}
        />
        <button
          aria-label="Users"
          className="button_users"
          type="button"
          onClick={openPopupEditUsers}
        />
        <button
          aria-label="Menu"
          className="button_menu"
          type="button"
          onClick={openPopupEditProject}
        />
      </h3>
      <Modules project={project} />
      <Popup
        isOpen={popupEditFilter}
        onClose={closePopupEditFilter}
        children={(<ProjectFiltersEdit />)}
      />
      <Popup
        isOpen={popupEditUsers}
        onClose={closePopupEditUsers}
        children={(<ProjectUsersEdit />)}
      />
      <Popup
        isOpen={popupEditProject}
        onClose={closePopupEditProject}
        children={(<ProjectEdit />)}
      />
    </>
  );
}
