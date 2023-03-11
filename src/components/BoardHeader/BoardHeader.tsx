import React, { useState } from 'react';

import Popup from '../Popup';
import SearchForm from '../SearchForm';
import ProjectEdit from '../ProjectEdit';
import ProjectUsersEdit from '../ProjectUsersEdit';

import { ProjectType } from '../Workplace';

export default function BoardHeader({ project }: { project: ProjectType | null }) {
  const onEditProjectName = (e: any) => console.log(e);
  const [popupEditProject, setPopupEditProject] = useState(false);
  const [popupEditUsers, setPopupEditUsers] = useState(false);
  const openPopupEditProject = () => setPopupEditProject(true);
  const closePopupEditProject = () => setPopupEditProject(false);
  const openPopupEditUsers = () => setPopupEditUsers(true);
  const closePopupEditUsers = () => setPopupEditUsers(false);

  return (
    <div className="main__header">
      <input
        className="project__name"
        value={project?.name}
        onChange={onEditProjectName}
      />
      <SearchForm searchType="module" />
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
      <button
        aria-label="alarm"
        className="button_alarm"
        type="button"
        onClick={() => console.log(0)}
      />
      <button
        aria-label="history"
        className="button_history"
        type="button"
        onClick={() => console.log(0)}
      />
      <button
        aria-label="help"
        className="button_help"
        type="button"
        onClick={() => console.log(0)}
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
    </div>
  );
}
