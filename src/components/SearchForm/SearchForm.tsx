import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

type FormPayload = {
  login: string;
};

const inputs = [
  {
    name: 'login',
    label: 'Login',
    required: true,
    autoComplete: 'login',
  },
];

export default function SearchForm({ searchType }: { searchType: string }) {
  console.log(searchType);
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      login: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log('>', data);
      // closePopupEditModule();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <form className="search-form__box" onSubmit={onSubmit}>
      {inputs.map((input) => (
        <Controller
          key={input.name}
          name={input.name as keyof FormPayload}
          control={control}
          render={({ field, fieldState }) => (
            <input
              {...field}
              {...input}
              type="text"
              placeholder="Search"
              className="input search-form__input"
              // errorText={fieldState.error?.message}
            />
          )}
        />
      ))}
      <button aria-label="Search" type="submit" className="button search-form__button" />
    </form>
  );
}
