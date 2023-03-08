/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Dwmeter from '../calc/Dwmeter';
import Popup from '../Popup';

export default function Module({ module }: { module: string }) {
  const [popupEditModule, setPopupEditModule] = useState(false);
  const openPopupEditModule = () => {
    setPopupEditModule(true);
  };
  const closePopupEditModule = () => {
    setPopupEditModule(false);
  };

  return (
    <>
      <li className="module" onClick={openPopupEditModule}>
        <button className="button_tag" type="button" onClick={() => console.log(0)}>T</button>
        <h5 className="module__name">{module}</h5>
        <span className="module__name">result</span>
        <span className="module__name">tmp</span>
        <button type="button" onClick={openPopupEditModule} className="button_delete" />
      </li>
      <Popup
        isOpen={popupEditModule}
        onClose={closePopupEditModule}
        children={(<Dwmeter closePopupEditModule={closePopupEditModule} />)}
      />
    </>
  );
}
