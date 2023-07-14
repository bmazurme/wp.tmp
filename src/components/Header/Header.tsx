import React from 'react';

import Logo from '../logo';
import Navigation from '../navigation';
import Menu from '../menu';

import style from './header.module.css';

export default function Header() {
  return (
    <>
      <section className={style.header}>
        <Logo />
        <Navigation />
      </section>
      <Menu />
    </>
  );
}
