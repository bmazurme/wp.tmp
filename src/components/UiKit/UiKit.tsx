/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';

import Button from '../Button';
import Input from '../Input';
import SelectButton from '../Select';
import { ColourOption } from '../../mock/colourOptions';

registerLocale('ru', ru);

export const colourOptions: readonly ColourOption[] = [
  {
    value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true,
  },
  {
    value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true,
  },
  {
    value: 'purple', label: 'Purple', color: '#5243AA',
  },
  {
    value: 'red', label: 'Red', color: '#FF5630', isFixed: true,
  },
  {
    value: 'orange', label: 'Orange', color: '#FF8B00',
  },
  {
    value: 'yellow', label: 'Yellow', color: '#FFC400',
  },
  {
    value: 'green', label: 'Green', color: '#36B37E',
  },
  {
    value: 'forest', label: 'Forest', color: '#00875A',
  },
  {
    value: 'slate', label: 'Slate', color: '#253858',
  },
  {
    value: 'silver', label: 'Silver', color: '#666666',
  },
];

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

export default function UiKit() {
  const [startDate, setStartDate] = useState(new Date());
  const [select, setSelect] = useState(10);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  console.log(errors);
  const atLeastOne = () => (getValues('test').length ? true : 'Please tell me if this is too hard.');

  return (
    <div className="grid grid_two">
      <div className="inbox">
        <label className="inbox__label">
          Date from
        </label>
        <DatePicker
          locale="ru"
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          onChange={(date: Date) => setStartDate(date)}
          customInput={<input className="input inbox__input inbox__input_120" />}
        />
      </div>
      <div className="inbox">
        <label className="inbox__label">
          Date from
        </label>
        <DatePicker
          locale="ru"
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          onChange={(date: Date) => setStartDate(date)}
          customInput={<input className="input inbox__input inbox__input_120" />}
        />
      </div>

      <Select options={options} />
      <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={colourOptions}
        styles={colourStyles}
      />

      <SelectButton
        labelText="Select button"
        value={select}
        classes={{
          list: 'bottom-full',
        }}
        options={[
          { label: 'Show 10 items', value: 10 },
          { label: 'Show 25 items', value: 25 },
          { label: 'Show 50 items', value: 50 },
        ]}
        onChange={setSelect}
      />
      <SelectButton
        labelText="Select button"
        value={select}
        classes={{
          list: 'bottom-full',
        }}
        options={[
          { label: 'Show 10 items', value: 10 },
          { label: 'Show 25 items', value: 25 },
          { label: 'Show 50 items', value: 50 },
        ]}
        onChange={setSelect}
      />
      <Input className="input inbox__input" label="Input" />
      <Input className="input inbox__input" label="Input" />

      <Button isValid className="button_submit" value="Button" />
      <Button isValid className="button_submit" value="Button" />

      <form>
        {[1].map((value) => (
          <input
            key={value}
            type="checkbox"
            value={value}
            {...register('test', {
              validate: atLeastOne,
            })}
          />
        ))}
      </form>
    </div>
  );
}
