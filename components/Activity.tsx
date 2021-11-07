import React from 'react';
import styles from '../styles/Activities.module.css';
import { DetailsPropsdata } from '../ProjectsTypes';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import EditActivity from './EditActivity';
import axios from 'axios';
const Activity: React.FC<DetailsPropsdata> = ({ details }) => {
  const [options, setOptions] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const dispatch = useDispatch();
  const { deleteActivities } = bindActionCreators(actionCreators, dispatch);
  const user = useSelector((state: State) => state.user);
  const deleteActivity = async (id: string) => {
    const headers = { Authorization: `Bearer ${user.token}` };
    try {
      const res = await axios.delete(
        `https://time-tracking-api-mamluk.herokuapp.com/api/v1/items/${id}`,
        { headers: headers }
      );
      deleteActivities(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={styles.activity}
      style={{
        backgroundColor: `${details.color}`,
        height: `${edit ? 'auto' : '200px'}`,
      }}
    >
      <div
        style={{ display: `${edit ? 'none' : 'block'}` }}
        className={styles.activity__color}
      ></div>
      {edit ? (
        <EditActivity
          name={details.name}
          time={details.time}
          color={details.color}
          token={user.token ? user.token : ''}
          setEdit={setEdit}
          id={details._id}
        />
      ) : (
        <div className={styles.activity__details}>
          <div className={styles.activity__name_edit}>
            <h2 className={styles.activity_name}>{details.name}</h2>
            <div
              className={styles.activity_edit}
              onClick={() => setOptions(!options)}
            >
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
          <div className={styles.time__container}>
            <div className={styles.activity__time}>
              <h2>{details.time} Hrs</h2>
            </div>
            <div className={styles.activity__last_week}>
              <p>Last week: 36 Hours</p>
            </div>
          </div>
        </div>
      )}
      <div
        className={`${styles.activity__options} ${options && styles.active}`}
      >
        <p
          className={styles.option}
          onClick={() => {
            setEdit(!edit);
            setOptions(!options);
          }}
        >
          Edit
        </p>
        <p
          className={styles.option}
          onClick={() => {
            setOptions(!options);
            deleteActivity(details._id);
          }}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default Activity;
