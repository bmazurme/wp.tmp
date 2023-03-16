/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import makeDataSelector from '../../store/makeDataSelector';
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

const projectSelector = makeDataSelector('project');

export default function BoardHeader({ project }
  : { project: TypeProject | null }) {
  const errorHandler = useErrorHandler();
  const { projects } = useSelector(projectSelector);
  const { control, reset, resetField } = useForm<FormPayload>({
    defaultValues: {
      name: project?.name,
    },
  });

  useEffect(() => {
    reset();
    resetField('name');
    console.log(123);
  }, [project?.name]);

  console.log(control);

  const onEditProjectName = () => {
    const newName = control._formValues.name;
    const pr = projects.map((x) => (x.id === project?.id ? { ...x, name: newName } : x));
    store.dispatch({ type: 'project/setProjects', payload: pr });
  };

  return (
    <>
      {inputs.map((input: any) => (
        <Controller
          key={input.name}
          name={input.name as keyof FormPayload}
          rules={{
            pattern: input.pattern,
            required: input.required,
          }}
          control={control}
          render={({ field, fieldState }) => (
            <input
              {...field}
              {...input}
              onBlur={onEditProjectName}
              className="project__name"
            />
          )}
        />
      ))}
    </>
  );
}
