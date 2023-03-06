import React from 'react';
import { useErrorHandler } from 'react-error-boundary';

import { useForm, Controller } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
// import useUser from '../../hook/useUser';
// import { useUpdateUserMutation } from '../../store';

import Input from '../Input';
import Button from '../Button';
import Content from '../Content';

import { Paths } from '../../utils/constants';

type FormPayload = {
  email: string;
};

const inputs = [
  {
    name: 'email',
    label: 'Email',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Email is invalid',
    },
    required: true,
    autoComplete: 'current-email',
  },
];

export default function PasswordReset() {
  // const userData = useUser();
  const errorHandler = useErrorHandler();
  // const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      // await updateUser({ ...userData, ...data });
      navigate(Paths.PROFILE.INDEX);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <Content>
      <div className="container">
        <h2 className="sign__title">Reset password</h2>
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
          <Button submit isValid className="button_submit" value="Reset" />
        </form>
        <ul className="profile__links">
          <li>
            <NavLink className="profile__link" to={Paths.SIGN.IN}>
              Назад
            </NavLink>
          </li>
        </ul>
      </div>
    </Content>
  );
}
