import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);
  const loginUserLocal = async () => {
    console.log({ email, password });
    await axios
      .post(
        `https://time-tracking-api-mamluk.herokuapp.com/api/v1/auth/login`,
        { email, password }
      )
      .then((res) => {
        const user = res.data;
        loginUser(res.data.user.name);
        console.log(res.data);
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login page</h1>
      <Link href='/'>go back</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUserLocal();
        }}
      >
        <div>
          <h2>Email:</h2>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h2>password:</h2>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default login;
