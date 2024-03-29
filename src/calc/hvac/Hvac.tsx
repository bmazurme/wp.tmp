import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import Input from '../../components/input';
import Button from '../../components/button';

type FormPayload = {
  name: string;
  flow: number;
  resistance: number;
};

const inputs = [
  {
    name: 'name',
    label: 'Name',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Name is invalid',
    },
    required: true,
    autoComplete: 'name',
  },
  {
    name: 'flow',
    label: 'Flow',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Flow is invalid',
    },
    required: true,
    autoComplete: 'flow',
  },
  {
    name: 'resistance',
    label: 'Resistance',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Resistance is invalid',
    },
    required: true,
    autoComplete: 'resistance',
  },
];

export default function Hvac({ closePopupEditModule }
  : { closePopupEditModule: () => void }) {
  const errorHandler = useErrorHandler();

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      name: '',
      flow: 0,
      resistance: 0,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);

      closePopupEditModule();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <div className="m-container">
      <div className="m-container__main">
        <h2 className="title">HVAC</h2>
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
      </div>
      <div className="m-container__sidebar">
        <Button isValid className="button_small" value="Status" />
        <Button isValid className="button_small" value="Calc 1" />
        <Button isValid className="button_small" value="Calc 2" />
        <Button isValid className="button_small" value="Calc 3" />
        <Button isValid className="button_small" value="Template" />
        <Button isValid className="button_small" value="Export" />
        <Button isValid className="button_small" value="Share" />
      </div>
    </div>
  );
}
