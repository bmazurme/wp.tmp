import React, { useMemo, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import WorkplacePage from './pages/workplace';
import UiKitPage from './pages/ui-kit';
import AboutPage from './pages/about';

import ProfilePage from './pages/profile';
import ProfileEditPage from './pages/profile-edit';

import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import SignupConfirmPage from './pages/signup-confirm';
import OauthPage from './pages/oauth';

import PasswordResetPage from './pages/password-reset';
import PasswordNew from './pages/password-new';
import PasswordUpdate from './pages/password-update';

import NotFoundPage from './pages/not-found';

import ThemeContext from './context/theme-context';

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

        <Route path={Paths.SIGN.IN} element={(<SigninPage />)} />
        <Route path={Paths.SIGN.UP} element={(<SignupPage />)} />
        <Route path={Paths.SIGN.CONFIRM} element={(<SignupConfirmPage />)} />
        <Route path={Paths.OAUTH} element={(<OauthPage />)} />

        <Route path={Paths.PROFILE.INDEX}>
          <Route index element={(<ProfilePage />)} />
          <Route path={Paths.PROFILE.EDIT} element={(<ProfileEditPage />)} />
        </Route>

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
