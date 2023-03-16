import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
import Menu from '../Menu';

export default function Header() {
  return (
    <>
      <section className="header">
        <Logo />
        <Navigation />
      </section>
      <Menu />
    </>
  );
}
