import React from 'react';
import styles from '../styles/UserCard.module.css';
import { CardProps } from '../ProjectsTypes';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router';
import { actionCreators } from '../state';
const UserCard: React.FC<CardProps> = ({ name, loginState }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { logoutUser } = bindActionCreators(actionCreators, dispatch);
  const login = () => {
    router.push('/login');
  };
  const logout = () => {
    localStorage.clear();
    logoutUser();
    router.reload();
  };
  return (
    <section className={styles.user__card}>
      <div className={styles.user__info}>
        <div className={styles.user__image}>
          <h1>{name[0].toLocaleUpperCase()}</h1>
        </div>
        <div className={styles.user__name_container}>
          <p>Report for</p>
          <h1 className={styles.user__name}>{name}</h1>
          <button
            className={styles.log}
            onClick={() => (loginState ? logout() : login())}
          >
            {loginState ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
      <div className={styles.periods__container}>
        <ul className={styles.periods}>
          <li className={styles.period} onClick={() => alert('Coming Soon')}>
            Daily
          </li>
          <li className={styles.period} onClick={() => alert('Coming Soon')}>
            Weekly
          </li>
          <li className={styles.period} onClick={() => alert('Coming Soon')}>
            Monthly
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserCard;
