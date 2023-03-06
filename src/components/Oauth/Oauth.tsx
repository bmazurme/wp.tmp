import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { oauth } from '../../utils/constants';

export default function Oauth() {
  const [searchParams] = useSearchParams();
  const code: string = searchParams.get('code')!;
  const [token, setToken] = useState('');

  // @ts-ignore
  useEffect(() => {
    const myHeaders = new Headers();
    const formdata = new FormData();
    formdata.append('grant_type', 'authorization_code');
    formdata.append('client_id', oauth.clientId);
    formdata.append('client_secret', oauth.clientSecret);
    formdata.append('code', code);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    console.log(token, setToken, requestOptions);
    // @ts-ignore
    // fetch('https://oauth.yandex.ru/token', requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => {
    //     setToken(JSON.parse(result).access_token);
    //   })
    //   .catch((error) => console.log('error', error));
  }, [code]);

  useEffect(() => {
    if (token) {
      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000', // env
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'text/plain',
          Authorization: `OAuth ${token}`,
        },
        redirect: 'follow',
      };

      console.log(requestOptions);
      // @ts-ignore
      // fetch('https://login.yandex.ru/info', requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.log('error', error));
    }
  }, [token]);

  return (
    <div className="">
      {code}
      -
      {token}
    </div>
  );
}
