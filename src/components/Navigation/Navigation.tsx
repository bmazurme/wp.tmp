import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSignOutMutation } from '../../store';
import ProfileButton from '../profile-button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const handlerClick = () => setIsOpen(!isOpen);
  const [signOut] = useSignOutMutation();
  const logOut = async () => {
    await signOut();
  };

  return (
    <>
      <div className={`navigation${isOpen ? ' navigation_opened' : ''}`}>
        <ul className={`navigation__links ${isOpen ? 'navigation__links_opened' : ''}`}>
          <li>
            <NavLink className="navigation__link navigation__link_home" to="/">Main</NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" onClick={logOut} to="/">Logout</NavLink>
          </li>
          <ProfileButton isOpen={isOpen} />
        </ul>
      </div>
      <button
        type="button"
        aria-label="Open"
        onClick={handlerClick}
        className={`button navigation__button${isOpen ? ' navigation__button_open' : ''}`}
      />
    </>
  );
}
