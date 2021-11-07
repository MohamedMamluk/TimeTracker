import React from 'react';
import axios from 'axios';
import styles from '../styles/Activities.module.css';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import formStyles from '../styles/Forms.module.css';
import { EditActivityProps } from '../ProjectsTypes';
import { actionCreators } from '../state';

const EditActivity: React.FC<EditActivityProps> = ({
  token,
  id,
  name,
  time,
  color,
  setEdit,
}) => {
  const [values, setValues] = React.useState({ name, time, color });
  console.log(`Edit values component is : ${values}`);
  const [active, setActive] = React.useState(false);
  const dispatch = useDispatch();
  const { patchActivities } = bindActionCreators(actionCreators, dispatch);
  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const res = await axios.patch(
        `https://time-tracking-api-mamluk.herokuapp.com/api/v1/items/${id}`,
        values,
        { headers: headers }
      );
      patchActivities(res.data);
      setActive(false);
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.newActivity} style={{ width: '100%' }}>
      <form className={formStyles.form} onSubmit={handleSubmit}>
        <div className={formStyles.input__wrapper}>
          <label className={formStyles.label} htmlFor='name'>
            Activity Name:
          </label>
          <input
            type='text'
            value={values.name}
            onChange={handleChange}
            id='name'
            name='name'
            className={formStyles.input}
          />
        </div>
        <div className={formStyles.input__wrapper}>
          <label className={formStyles.label} htmlFor='time'>
            Time spent doing the activity:
          </label>
          <input
            type='text'
            name='time'
            value={values.time}
            onChange={handleChange}
            id='time'
            className={formStyles.input}
          />
        </div>
        <div className={formStyles.input__wrapper}>
          <label className={formStyles.label} htmlFor='color'>
            Pick desired activity color:
          </label>
          <input
            type='color'
            value={values.color}
            onChange={handleChange}
            name='color'
            id='color'
            className={formStyles.input}
          />
        </div>
        <button className={formStyles.form__submit}>Edit</button>
        <button
          type='button'
          onClick={() => setEdit(false)}
          className={formStyles.form__submit}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditActivity;
