import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { Controller, useForm } from 'react-hook-form';

import Button from '../Button';
import Checkbox from '../Checkbox';

type FormPayload = {
  ws: boolean;
  hvac: boolean;
  es: boolean;
};

const inputs = [
  {
    name: 'ws',
    label: 'WS',
    type: 'checkbox',
    required: false,
  },
  {
    name: 'hvac',
    label: 'HVAC',
    type: 'checkbox',
    required: false,
  },
  {
    name: 'es',
    label: 'HVAC',
    type: 'checkbox',
    required: false,
  },
];

export default function ProjectFiltersEdit() {
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      ws: true,
      hvac: true,
      es: true,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });
  return (
    <form onSubmit={onSubmit}>
      {inputs.map((input) => (
        <Controller
          key={input.name}
          name={input.name as keyof FormPayload}
          control={control}
          render={({ field, fieldState }) => (
            <Checkbox
              {...field}
              {...input}
              className="input inbox__input"
              errorText={fieldState.error?.message}
            />
          )}
        />
      ))}
      <Button submit isValid className="button_submit" value="Save" />
    </form>
  );
}
