import React from 'react';
import styles from '../styles/Activities.module.css';
import { ActivitiesProps } from '../ProjectsTypes';
import { useSelector } from 'react-redux';
import Activity from './Activity';
import AddNewActivity from './AddNewActivity';
import { State } from '../state';
const Activities: React.FC<ActivitiesProps> = ({ data, token }) => {
  const activities = useSelector((state: State) => state.activities);
  return (
    <section className={styles.activities__container}>
      {activities &&
        activities.map((item, index) => {
          return <Activity details={item} key={index} />;
        })}
      <AddNewActivity token={token} />
    </section>
  );
};

export default Activities;
