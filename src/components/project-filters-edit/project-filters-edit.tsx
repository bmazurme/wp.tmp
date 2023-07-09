import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { Controller, useForm } from 'react-hook-form';

import Button from '../button';
import Input from '../input';

type FormPayload = {
  ws: string;
  hvac: string;
  es: string;
};

const inputs = [
  {
    name: 'ws',
    label: 'WS',
    type: 'checkbox',
    required: false,
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Name is invalid',
    },
  },
  {
    name: 'hvac',
    label: 'HVAC',
    type: 'checkbox',
    required: false,
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Name is invalid',
    },
  },
  {
    name: 'es',
    label: 'HVAC',
    type: 'checkbox',
    required: false,
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Name is invalid',
    },
  },
];

export default function ProjectFiltersEdit() {
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      ws: 'true',
      hvac: 'true',
      es: 'true',
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
          rules={{
            pattern: input.pattern,
            required: input.required,
          }}
          control={control}
          render={({ field, fieldState }) => (
            <Input
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
