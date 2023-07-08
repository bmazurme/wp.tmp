import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import Logo from '../../components/logo';
// import { useConfirmUserMutation } from '../../../store';

import { Paths } from '../../utils/constants';

export default function SignupConfirm() {
  const errorHandler = useErrorHandler();
  console.log(errorHandler);
  // const [confirm] = useConfirmUserMutation();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params;
  const message = 'Message - ok or error';

  useEffect(() => {
    // confirm(token!)
    //   .then(() => {
    //     if (token) {
    setTimeout(() => (navigate(Paths.SIGN.IN)), 10000);
    //     }
    //   })
    //   .catch(({ status, data: { reason } }) => errorHandler(new Error(`${status}: ${reason}`)));
    return () => {
      console.log('end');
    };
  }, []);

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Sign confirm</h2>
        <p className="page__description">{message}</p>
        <p className="page__description">{token}</p>
      </div>
    </section>
  );
}
