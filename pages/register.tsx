import React from 'react';
import axios from 'axios';
const register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const registerUser = async () => {
    console.log({ name, email, password });
    await axios
      .post(
        `https://time-tracking-api-mamluk.herokuapp.com/api/v1/auth/register`,
        { name, email, password }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>register page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        <div>
          <h2>name:</h2>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default register;
