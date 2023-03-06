/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';

registerLocale('ru', ru);

export default function UiKit() {
  const [startDate, setStartDate] = useState(new Date());
  const [select, setSelect] = useState(10);

  return (
    <div>
      <div className="inbox">
        <label className="inbox__label">
          Date from
        </label>
        <DatePicker
          locale="ru"
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          onChange={(date: Date) => setStartDate(date)}
          customInput={<input className="input inbox__input inbox__input_150" />}
        />
      </div>

      <Select
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
      <Button isValid className="button_submit" value="Button" />
    </div>
  );
}
