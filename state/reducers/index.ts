import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  user: userReducer,
  activities: activitiesReducer,
});
export default reducers;

export type State = ReturnType<typeof reducers>;
