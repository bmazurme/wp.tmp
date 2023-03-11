/* eslint-disable no-shadow */
import React, { ReactNode, useState } from 'react';

import Popup from '../Popup';
import SearchForm from '../SearchForm';
import ProjectEdit from '../ProjectEdit';
import ProjectUsersEdit from '../ProjectUsersEdit';
import History from '../History';
import Help from '../Help';
import Notification from '../Notification';

import { TypeProject } from '../Workplace';

const popups: Record<string, ReactNode> = {
  help: <Help />,
  history: <History />,
  projectEdit: <ProjectEdit />,
  projectUsersEdit: <ProjectUsersEdit />,
  notification: <Notification />,
};

export default function BoardHeader({ project }: { project: TypeProject | null }) {
  const onEditProjectName = (e: any) => console.log(e);
  const [popup, setPopup] = useState(false);
  const [form, setForm] = useState<string>('help');
  const openPopup = (name: string) => {
    setForm(name);
    setPopup(true);
  };
  const closePopup = () => setPopup(false);

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
        onClick={() => openPopup('projectUsersEdit')}
      />
      <button
        aria-label="Menu"
        className="button_menu"
        type="button"
        onClick={() => openPopup('projectEdit')}
      />
      <button
        aria-label="alarm"
        className="button_alarm"
        type="button"
        onClick={() => openPopup('notification')}
      />
      <button
        aria-label="history"
        className="button_history"
        type="button"
        onClick={() => openPopup('history')}
      />
      <button
        aria-label="help"
        className="button_help"
        type="button"
        onClick={() => openPopup('help')}
      />
      <Popup
        isOpen={popup}
        onClose={closePopup}
        children={(popups[form])}
      />
    </div>
  );
}
