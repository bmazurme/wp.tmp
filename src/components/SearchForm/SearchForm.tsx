import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

type FormPayload = {
  login: string;
};

export default function SearchForm() {
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      login: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log('>', data);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <form className="search-form__box" onSubmit={onSubmit}>
      <Controller
        name={'login' as keyof FormPayload}
        control={control}
        render={({ field, fieldState }) => (
          <input
            {...field}
            required={false}
            type="search"
            placeholder="Search"
            className="input search-form__input"
            // errorText={fieldState.error?.message}
          />
        )}
      />
      <button aria-label="Search" type="submit" className="button search-form__button" />
    </form>
  );
}
