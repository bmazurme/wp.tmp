/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';

import Chip from '../Chip';

import { ColourOption, colourOptions } from '../../mock/colourOptions';
import Dwmeter from '../calc/Dwmeter';
import Popup from '../Popup';

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, {
    data, isDisabled, isFocused, isSelected,
  }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

export default function Module({ module }: { module: string }) {
  const [popupEditModule, setPopupEditModule] = useState(false);
  const openPopupEditModule = (e: any) => {
    e.stopPropagation();
    setPopupEditModule(true);
  };

  const closePopupEditModule = () => {
    setPopupEditModule(false);
  };

  return (
    <>
      <li className="module">
        <Select
          closeMenuOnSelect={false}
          defaultValue={[colourOptions[2]]}
          isMulti
          options={colourOptions}
          styles={colourStyles}
        />
        <Chip label={module} className="tag" />
        <button
          aria-label="Menu"
          className="button_menu"
          type="button"
          onClick={openPopupEditModule}
        />
      </li>
      <Popup
        isOpen={popupEditModule}
        onClose={closePopupEditModule}
        children={(<Dwmeter closePopupEditModule={closePopupEditModule} />)}
      />
    </>
  );
}
