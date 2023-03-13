import React, { ReactNode, useState } from 'react';

import Popup from '../Popup';
import SearchForm from '../SearchForm';

import buttons, { TypeButton } from './buttons';
import { TypeProject } from '../Workplace';

export default function BoardHeader({ project }: { project: TypeProject | null }) {
  const onEditProjectName = (e: any) => console.log(e);
  const [popup, setPopup] = useState(false);
  const [form, setForm] = useState<ReactNode | null>(null);
  const openPopup = (name: ReactNode) => {
    setForm(name);
    setPopup(true);
  };
  const closePopup = () => setPopup(false);

  return (
    <div className="main__header">
      <input className="project__name" value={project?.name} onChange={onEditProjectName} />
      <SearchForm searchType="module" />

      {buttons.map(({ ariaLabel, className, node }: TypeButton) => (
        <button
          key={ariaLabel}
          aria-label={ariaLabel}
          className={className}
          type="button"
          onClick={() => openPopup(node)}
        />
      ))}
      <Popup isOpen={popup} onClose={closePopup} children={form} />
    </div>
  );
}
