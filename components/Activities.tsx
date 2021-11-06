import React from 'react';
import styles from '../styles/Activities.module.css';
import Activity from './Activity';
const Activiries = () => {
  const [color, setColor] = React.useState('');
  console.log(color);
  return (
    <section className={styles.activities__container}>
      <Activity />
    </section>
  );
};

export default Activiries;
