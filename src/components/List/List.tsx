/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { TypeProject } from '../Workplace';

export default function List({
  openProject, item, items, sidebar,
}
: {
  openProject: (pr: TypeProject) => void,
  item: TypeProject | null,
  items: TypeProject[],
  sidebar: boolean,
}) {
  return (
    <ul className="list">
      {items.map((pr: TypeProject) => (
        <li
          className={`list__item${pr.id === item?.id
            ? ' list__item_active'
            : ''}${sidebar ? ' list__item_center' : ''}`}
          onClick={() => openProject(pr)}
          key={pr.id}
        >
          <span className={`item-sidebar${sidebar ? '' : ' item-sidebar_open'}`}>{sidebar ? pr.name[0] : pr.name }</span>
        </li>
      ))}
    </ul>
  );
}