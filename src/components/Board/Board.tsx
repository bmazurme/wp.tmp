/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, FormEvent } from 'react';

import SearchForm from '../SearchForm';
import Popup from '../Popup';
import Module from '../Module/Module';
import { ProjectType } from '../Workplace';

export default function Board({ project }: { project: ProjectType | null }) {
  const [popupEditProject, setPopupEditProject] = useState(false);
  const [popupEditFilter, setPopupEditFilter] = useState(false);
  const [popupEditUsers, setPopupEditUsers] = useState(false);

  const openPopupEditProject = () => {
    setPopupEditProject(true);
  };

  const onSearch = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };
  const onEditProjectName = (e: any) => {
    console.log(e);
  };
  const closePopupEditProject = () => {
    setPopupEditProject(false);
  };
  const openPopupEditFilter = () => {
    setPopupEditFilter(true);
  };
  const closePopupEditFilter = () => {
    setPopupEditFilter(false);
  };
  const openPopupEditUsers = () => {
    setPopupEditUsers(true);
  };
  const closePopupEditUsers = () => {
    setPopupEditUsers(false);
  };

  return (
    <>
      <div className="main__header">
        <input className="project__name" value={project?.name} onChange={onEditProjectName} />
        <SearchForm handleChange={() => console.log(1)} handleSubmit={onSearch} />
        <button className="button_alarm" type="button" onClick={() => console.log(0)} />
        <button className="button_history" type="button" onClick={() => console.log(0)} />
        <button className="button_help" type="button" onClick={() => console.log(0)} />
      </div>
      <h3 className="main__title">
        <button className="button_filter" type="button" onClick={openPopupEditFilter} />
        <button className="button_users" type="button" onClick={openPopupEditUsers} />
        <button className="button_menu" type="button" onClick={openPopupEditProject} />
      </h3>
      <ul className="modules">
        {project?.modules.map((module) => (<Module module={module} />))}
      </ul>
      <Popup
        isOpen={popupEditFilter}
        onClose={closePopupEditFilter}
        children={<div><h2 className="title">Edit filter</h2></div>}
      />
      <Popup
        isOpen={popupEditUsers}
        onClose={closePopupEditUsers}
        children={<div><h2 className="title">Add users</h2></div>}
      />
      <Popup
        isOpen={popupEditProject}
        onClose={closePopupEditProject}
        children={<div><h2 className="title">Edit project</h2></div>}
      />
    </>
  );
}
