import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [show, setShow] = React.useState(false);

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
    <section className={styles.login__page}>
      <div className={styles.login__container}>
        <div className={styles.login__form__container}>
          <h1>Account Creation</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerUser();
            }}
            className={styles.login__form}
          >
            <div className={styles.input__wrapper}>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                className={styles.input}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name...'
                required
              />
            </div>
            <div className={styles.input__wrapper}>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email...'
                required
              />
            </div>
            <div className={styles.input__wrapper}>
              <input
                type={show ? 'text' : 'password'}
                name='password'
                id='password'
                value={password}
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password...'
                required
              />

              {show ? (
                <AiOutlineEye
                  fill='black'
                  className={styles.show__password}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  fill='black'
                  className={styles.show__password}
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
            <button className={styles.form__submit} type='submit'>
              Register
            </button>
          </form>
          <p style={{ textAlign: 'center' }}>
            Already have an account?
            <Link href='/login' passHref>
              <a className={styles.link}> Login now.</a>
            </Link>
          </p>
        </div>
        <div className={styles.login__image__container}>
          <img
            src='/PageImages/register.gif'
            alt=''
            className={styles.login__image}
          />
        </div>
      </div>
    </section>
  );
};

export default register;
