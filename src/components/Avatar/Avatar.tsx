import React from 'react';

import style from './avatar.module.css';
import src from '../../images/profile.svg';

export default function Avatar() {
  return (<img className={style.avatar} src={src} alt="avatar" />);
}
