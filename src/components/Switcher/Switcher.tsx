import React, { useState } from 'react';

export default function Switcher({ handlerSwitchClick, value, label }
  : { handlerSwitchClick: () => void, value: boolean, label?: string }) {
  const [on, setOn] = useState(value ?? false);
  const onClickHandler = () => {
    setOn(!on);
    handlerSwitchClick();
  };

  return (
    <div className="switcher">
      <span className="switcher__label">{label}</span>
      <button
        type="button"
        aria-label="Switch"
        className={`${on ? 'switcher__button_on' : 'switcher__button'}`}
        onClick={onClickHandler}
      />
    </div>
  );
}
