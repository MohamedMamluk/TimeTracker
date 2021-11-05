import React from 'react';
import styles from '../styles/Activities.module.css';
const Activity = () => {
  return (
    <div className={styles.activity}>
      <div className={styles.activity__color}></div>
      <div className={styles.activity__details}>
        <div className={styles.activity__name_edit}>
          <h2 className={styles.activity_name}>Work</h2>
          <div className={styles.activity_edit}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
        <div className={styles.time__container}>
          <div className={styles.activity__time}>
            <h2>32 Hrs</h2>
          </div>
          <div className={styles.activity__last_week}>
            <p>Last week: 36 Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
