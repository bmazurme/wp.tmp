/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
// import { useErrorHandler } from 'react-error-boundary';
import makeDataSelector from '../../store/make-data-selector';
import { store } from '../../store';

type FormPayload = {
  name: string;
};

const projectSelector = makeDataSelector('project');

export default function ProjectName({ project }
  : { project: TypeProject | null }) {
  // const errorHandler = useErrorHandler();
  const { projects } = useSelector(projectSelector);
  const { control, reset } = useForm<FormPayload>({
    defaultValues: {
      name: project?.name,
    },
  });

  useEffect(() => {
    reset({ name: project?.name });
  }, [project?.name]);

  const onEditProjectName = () => {
    const newName = control._formValues.name;
    const pr = projects.map((x) => (x.id === project?.id ? { ...x, name: newName } : x));
    store.dispatch({ type: 'project/setProjects', payload: pr });
  };

  return (
    <Controller
      name={'name' as keyof FormPayload}
      rules={{
        pattern: {
          value: /^[a-z0-9_-]{3,15}$/,
          message: 'Name is invalid',
        },
        required: true,
      }}
      control={control}
      render={({ field, fieldState }) => (
        <input {...field} onBlur={onEditProjectName} className="project__name" />
      )}
    />
  );
}
