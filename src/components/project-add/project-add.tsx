import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import Input from '../input';
import Button from '../button';

import { store } from '../../store';

type FormPayload = {
  name: string;
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
];

export default function ProjectAdd({ items }: { items: TypeProject[] }) {
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      name: '',
    },
  });

  const addProject = (arr: TypeProject[]) => store.dispatch({ type: 'project/setProjects', payload: arr });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      addProject([{
        id: items.length + 1,
        name: data.name,
        owner: 0,
        address: '',
        likes: [],
        users: [],
        modules: [],
      }, ...items]);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <>
      <h2 className="title">New project</h2>
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
        <Button submit isValid className="button_submit" value="Create" />
      </form>
    </>
  );
}
