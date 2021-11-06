import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const router = useRouter();
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
        loginUser(res.data.user.name, res.data.token);
        console.log(res.data);
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className={styles.login__page}>
      <div className={styles.login__container}>
        <div className={formStyles.form__container}>
          <h1>Account Login</h1>
          {/* <Link href='/'>go back</Link> */}
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
              <input type='checkbox' id='remember' />
              <label htmlFor='remember'> Remember Me?</label>
            </div>
            <button className={formStyles.form__submit} type='submit'>
              Login
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
          {/* <Image
            width='500'
            height='500'
            layout='responsive'
            className={styles.login__image}
            src={img}
          /> */}
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
