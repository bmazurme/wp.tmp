import React from 'react';

import { linksFooter } from '../../mock/linksFooter';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__top">
        <span className="footer__text">xxx</span>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__menu">
          {linksFooter.map((link: Record<string, string>, index: number) => (
            <li key={index}>
              <a className="footer__link" href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
