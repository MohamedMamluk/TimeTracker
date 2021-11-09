import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { actionCreators, State } from '../state';
import styles from '../styles/Home.module.css';
import { bindActionCreators } from 'redux';
import UserCard from '../components/UserCard';
import Activities from '../components/Activities';
import axios from 'axios';
const Home = () => {
  const dispatch = useDispatch();
  const { loginUser, readActivities } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const userState = useSelector((state: State) => state.user);
  const [loginState, setLoginState] = React.useState(false);
  const [data, setData] = React.useState([]);
  const getItems = async (token: string) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const { data } = await axios.get(
        'https://time-tracking-api-mamluk.herokuapp.com/api/v1/items',
        {
          headers: headers,
        }
      );
      readActivities(data);
      setLoginState(true);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLoginState(true);
      const {
        token,
        user: { name },
      } = JSON.parse(user);
      loginUser(name, token);
      getItems(userState.token ? userState.token : token);
    }
    if (userState.token) {
      getItems(userState.token);
    }
  }, []);
  return (
    <main className={styles.container}>
      <Head>
        <title>Time Tracker</title>
        <meta
          name='description'
          content='Find out how much time you are spending on various activities.'
        />
        <link rel='canonical' href='time-tracker-mamluk.vercel.app' />
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='Time Tracker' />

        <meta property='og:title' content='Time Tracker' />

        <meta
          property='og:description'
          content='Find out how much time you are spending on various activities.'
        />

        <meta property='og:image' content='/public/logo.svg' />

        <meta property='og:url' content='time-tracker-mamluk.vercel.app' />

        <meta property='og:site_name' content='Time Tracker' />
      </Head>
      <section className={styles.main__section}>
        <UserCard
          name={userState.user ? userState.user : 'Guest'}
          loginState={loginState}
        />

        <Activities
          data={data}
          token={userState.token ? userState.token : ''}
        />
      </section>
    </main>
  );
};

export default Home;
