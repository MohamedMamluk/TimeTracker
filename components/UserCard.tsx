import React from 'react';
import styles from '../styles/UserCard.module.css';
const UserCard = () => {
  return (
    <section className={styles.user__card}>
      <div className={styles.user__info}>
        <div className={styles.user__image}></div>
        <div className={styles.user__name_container}>
          <p>Report for</p>
          <h1 className={styles.user__name}>Jeremy Robson</h1>
        </div>
      </div>
      <div className={styles.periods__container}>
        <ul className={styles.periods}>
          <li className={styles.period}>Daily</li>
          <li className={styles.period}>Weekly</li>
          <li className={styles.period}>Monthly</li>
        </ul>
      </div>
    </section>
  );
};

export default UserCard;
