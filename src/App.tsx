import React, { useMemo, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import WorkplacePage from './pages/Workplace';
import UiKitPage from './pages/UiKit';
import AboutPage from './pages/About';

import ProfilePage from './pages/Profile';
import ProfileEditPage from './pages/ProfileEdit';

import ProjectPage from './pages/Project';
import ProjectEditPage from './pages/ProjectEdit';

import SigninPage from './pages/SignIn';
import SignupPage from './pages/Signup';
import SignupConfirmPage from './pages/SignupConfirm';
import OauthPage from './pages/Oauth';

import PasswordResetPage from './pages/PasswordReset';
import PasswordNew from './pages/PasswordNew';
import PasswordUpdate from './pages/PasswordUpdate';

import NotFoundPage from './pages/NotFound';

import ThemeContext from './context/ThemeContext';

import { Paths } from './utils/constants';

export default function App() {
  const [style, setStyle] = useState('light');
  const providerValue = useMemo(() => ({ style, setStyle }), [style, setStyle]);

  useEffect(() => {
    const currentTheme = localStorage.getItem('wp-theme');
    document.documentElement.setAttribute('data-theme', (currentTheme === 'dark') ? 'dark' : 'light');
  }, [style]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <Routes>
        <Route index element={(<WorkplacePage />)} />

        <Route path={Paths.PROJECT.INDEX} element={(<ProjectPage />)} />
        <Route path={Paths.PROJECT.EDIT} element={(<ProjectEditPage />)} />

        <Route path={Paths.SIGN.IN} element={(<SigninPage />)} />
        <Route path={Paths.SIGN.UP} element={(<SignupPage />)} />
        <Route path={Paths.SIGN.CONFIRM} element={(<SignupConfirmPage />)} />
        <Route path={Paths.OAUTH} element={(<OauthPage />)} />

        <Route path={Paths.PROFILE.INDEX} element={(<ProfilePage />)} />
        <Route path={Paths.PROFILE.EDIT} element={(<ProfileEditPage />)} />

        <Route path={Paths.PASSWORD.RESET} element={(<PasswordResetPage />)} />
        <Route path={Paths.PASSWORD.UPDATE} element={(<PasswordUpdate />)} />
        <Route path={Paths.PASSWORD.NEW} element={(<PasswordNew />)} />

        <Route path={Paths.ABOUT} element={(<AboutPage />)} />
        <Route path={Paths.UI_KIT} element={(<UiKitPage />)} />

        <Route path="*" element={(<NotFoundPage />)} />
      </Routes>
    </ThemeContext.Provider>
  );
}
