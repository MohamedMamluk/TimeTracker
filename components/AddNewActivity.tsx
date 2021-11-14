import React from 'react'
import axios from 'axios'
import styles from '../styles/Activities.module.css'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import formStyles from '../styles/Forms.module.css'
import { NewActivityProps } from '../ProjectsTypes'
import { actionCreators } from '../state'

const AddNewActivity: React.FC<NewActivityProps> = ({ token }) => {
  const [values, setValues] = React.useState({
    name: '',
    time: '',
    color: '000000'
  })
  const [active, setActive] = React.useState(false)
  const dispatch = useDispatch()
  const { createActivity } = bindActionCreators(actionCreators, dispatch)
  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const headers = { Authorization: `Bearer ${token}` }
    try {
      const res = await axios.post(
        'https://time-tracking-api-mamluk.herokuapp.com/api/v1/items',
        values,
        { headers: headers }
      )
      createActivity(res.data)
      setValues({ name: '', time: '', color: '000000' })
      setActive(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.newActivity}>
      {active ? (
        <form className={formStyles.form} onSubmit={handleSubmit}>
          <div className={formStyles.input__wrapper}>
            <label className={formStyles.label} htmlFor="name">
              Activity Name:
            </label>
            <input
              type="text"
              value={values.name}
              onChange={handleChange}
              id="name"
              name="name"
              className={formStyles.input}
              required
            />
          </div>
          <div className={formStyles.input__wrapper}>
            <label className={formStyles.label} htmlFor="time">
              Time spent doing the activity (in hours):
            </label>
            <input
              type="number"
              name="time"
              value={values.time}
              onChange={handleChange}
              id="time"
              className={formStyles.input}
              required
            />
          </div>
          <div className={formStyles.input__wrapper}>
            <label className={formStyles.label} htmlFor="color">
              Pick desired activity color:
            </label>

            <input
              type="color"
              value={values.color}
              onChange={handleChange}
              name="color"
              id="color"
              className={formStyles.input}
            />
          </div>
          <button className={formStyles.form__submit}>Add</button>
          <button
            className={formStyles.form__submit}
            type="button"
            onClick={() => setActive(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div onClick={() => setActive(!active)} className={styles.add}>
          <h1>Add new Activity</h1>
          <h1 className={styles.plus__sign}>+</h1>
        </div>
      )}
    </div>
  )
}

export default AddNewActivity
