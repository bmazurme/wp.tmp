import React from 'react';

import style from './more.module.css';

export default function More({ handleMoreClick }: { handleMoreClick: () => void }) {
  return (
    <div className={style.more}>
      <button onClick={handleMoreClick} type="button" className="button button_more">
        More
      </button>
    </div>
  );
}
