import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useUser from '../../hooks/use-user';

import Avatar from '../../components/avatar';
import Content from '../../components/content';
import Field from '../../components/field';
import Switcher from '../../components/switcher';

import { Paths } from '../../utils/constants';
import ThemeContext from '../../context/theme-context';

export default function Profile() {
  const userData = useUser();
  const { style, setStyle } = useContext(ThemeContext);

  const toggleTheme = () => {
    setStyle(style === 'light' ? 'dark' : 'light');
    localStorage.setItem('wp-theme', style === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('wp-theme');
    setStyle(currentTheme === 'light' ? 'light' : 'dark');
  }, []);

  return (
    <Content>
      <div className="container">
        <h2 className="sign__title">Profile</h2>
        <div className="profile__avatar">
          <Avatar />
        </div>
        <Switcher
          label="Dark theme"
          handlerSwitchClick={toggleTheme}
          value={(localStorage.getItem('wp-theme') === 'dark')}
        />
        <Field label="Login" value={userData!.login} />
        <Field label="E-mail" value={userData!.email} />
        <Field label="First name" value={userData!.first_name} />
        <Field label="Second name" value={userData!.second_name} />

        <Field label="Coins" value="101" />

        <ul className="profile__links">
          <li>
            <NavLink className="profile__link" to={Paths.PROFILE.EDIT}>
              Edit profile
            </NavLink>
          </li>
          <li>
            <NavLink className="profile__link" to={Paths.PASSWORD.UPDATE}>
              Update password
            </NavLink>
          </li>
          <li>
            <NavLink
              className="profile__link profile__link_red"
              to={Paths.MAIN}
              onClick={() => console.log('logout')}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </Content>
  );
}
