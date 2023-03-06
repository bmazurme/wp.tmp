import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    label: 'Link 1',
    to: '/',
  },
  {
    label: 'UI',
    to: '/uikit',
  },
  {
    label: 'API',
    to: '/',
  },
  {
    label: 'History',
    to: '/history',
  },
  {
    label: 'About',
    to: '/about',
  },
];

export default function Menu() {
  return (
    <ul className="menu">
      {links.map(({ label, to }, i) => (
        <li key={`${i}${to}`}>
          <NavLink className="menu__link" to={to}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
