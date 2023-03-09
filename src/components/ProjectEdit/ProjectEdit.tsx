import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import Input from '../Input';
import Button from '../Button';

type FormPayload = {
  name: string;
  description: string;
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
    name: 'description',
    label: 'Description',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Description is invalid',
    },
    required: true,
    autoComplete: 'description',
  },
];

export default function ProjectEdit() {
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      // closePopupEditModule();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <div>
      <h2 className="title">Edit project</h2>
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
  );
}
