import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import styles from '../styles/Login.module.css';
import formStyles from '../styles/Forms.module.css';
// import img from '../components/PageImages/LoginBG.jpg';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [waiting, setWaiting] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);
  const loginUserLocal = async () => {
    setWaiting(true);
    await axios
      .post(
        `https://time-tracking-api-mamluk.herokuapp.com/api/v1/auth/login`,
        { email, password }
      )
      .then((res) => {
        setWaiting(false);
        const user = res.data;
        loginUser(res.data.user.name, res.data.token);
        if (remember) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        router.push('/');
      })
      .catch((err) => {
        setWaiting(false);
        alert(
          'Please check that you entered your Email and Password correctly'
        );
      });
  };
  return (
    <section className={styles.login__page}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.login__container}>
        <div className={formStyles.form__container}>
          <h1>Account Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginUserLocal();
            }}
            className={formStyles.form}
          >
            <div className={formStyles.input__wrapper}>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                className={formStyles.input}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email...'
                required
              />
            </div>
            <div className={formStyles.input__wrapper}>
              <input
                type={show ? 'text' : 'password'}
                name='password'
                id='password'
                value={password}
                className={formStyles.input}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password...'
                required
              />

              {show ? (
                <AiOutlineEye
                  fill='black'
                  className={formStyles.show__password}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  fill='black'
                  className={formStyles.show__password}
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
            <div className={formStyles.remember__password}>
              <input
                type='checkbox'
                id='remember'
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label htmlFor='remember'> Remember Me?</label>
            </div>
            <button
              className={formStyles.form__submit}
              type='submit'
              disabled={waiting ? true : false}
            >
              {waiting ? 'Please wait...' : 'Login'}
            </button>
          </form>
          <p style={{ textAlign: 'center' }}>
            {`Don't`} have an account?
            <Link href='/register' passHref>
              <a className={styles.link}> Register now.</a>
            </Link>
          </p>
        </div>
        <div className={styles.login__image__container}>
          <img
            src='/PageImages/LoginGif.gif'
            alt=''
            className={styles.login__image}
          />
        </div>
      </div>
    </section>
  );
};

export default login;
