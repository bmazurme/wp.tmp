/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';

import Chip from '../Chip';

import { ColourOption, colourOptions } from '../../mock/colourOptions';
import RainWater from '../../calc/rainwater/form/RainWater';
import Template from '../../calc/rainwater/template/Template';
import Popup from '../Popup';

import { TypeResult } from '../../calc/rainwater/utils/types';

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

// import { lazily } from 'react-lazily';
// const { MyComponent } = lazily(() => import("../path/to/components.js"));
// const { MyComponent, MyOtherComponent, SomeOtherComponent } = lazily(
//   () => import("../path/to/components.js")
// );

export default function Module({ module }: { module: string }) {
  const [popupEditModule, setPopupEditModule] = useState(false);
  const [popupTemplate, setPopupTemplate] = useState(false);
  const [result, setResult] = useState<TypeResult | null>(null);

  const openPopupEditModule = (e: any) => {
    e.stopPropagation();
    setPopupEditModule(true);
  };

  const closePopupEditModule = () => {
    setPopupEditModule(false);
  };

  const openPopupTemplate = (e: any) => {
    e.stopPropagation();
    setPopupTemplate(true);
  };

  const closePopupTemplate = () => {
    setPopupTemplate(false);
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
        <Chip label={result ? `${result.flow.toFixed(2)} л/с` : 'not result'} className="tag" />
        <button
          type="button"
          aria-label="Menu"
          className="button_square button_menu"
          disabled={!result}
          onClick={openPopupTemplate}
        />
        <button
          type="button"
          aria-label="Menu"
          className="button_square button_menu"
          onClick={openPopupEditModule}
        />
      </li>
      <Popup
        isOpen={popupEditModule}
        onClose={closePopupEditModule}
        children={<RainWater setResult={setResult} closePopupEditModule={closePopupEditModule} />}
      />
      <Popup
        isOpen={popupTemplate}
        onClose={closePopupTemplate}
        children={<Template result={result} closePopupEditModule={closePopupTemplate} />}
      />
    </>
  );
}
