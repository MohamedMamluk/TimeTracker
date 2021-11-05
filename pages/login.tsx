import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import styles from '../styles/Login.module.css';
import img from '../public/PageImages/Login.jpg';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(false);
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
    <section className={styles.login__page}>
      <div className={styles.login__container}>
        <div className={styles.login__form__container}>
          <h1>Account Login</h1>
          {/* <Link href='/'>go back</Link> */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginUserLocal();
            }}
            className={styles.login__form}
          >
            <div className={styles.input__wrapper}>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email...'
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
              />
              {/* <button
                className={styles.show__password}
                onClick={() => setShow(!show)}
              >
                {' '}
              </button> */}
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
            <div className={styles.remember__password}>
              <input type='checkbox' id='remember' />
              <label htmlFor='remember'> Remember Me?</label>
            </div>
            <button className={styles.form__submit} type='submit'>
              Login
            </button>
          </form>
          <p>
            Dont have an account?{' '}
            <Link href='/register' passHref>
              <a className={styles.link}> Register now.</a>
            </Link>
          </p>
        </div>
        <div className={styles.login__image__container}>
          <Image className={styles.login__image} src={img} />
        </div>
      </div>
    </section>
  );
};

export default login;
