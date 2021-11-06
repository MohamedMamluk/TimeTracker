import { ActionTypes } from '../ActionTypes';
import { ActivityTypes } from '../../ProjectsTypes';

type LoginUser = {
  type: ActionTypes.LOGIN_USER;
  payload: { user: string; token: string };
};
type LogoutUser = {
  type: ActionTypes.LOGOUT_USER;
  payload: { user: null; token: null };
};

type CreateActivity = {
  type: ActionTypes.CREATE_ACTIVITY;
  payload: ActivityTypes;
};
type ReadActivities = {
  type: ActionTypes.READ_ACTIVITIES;
  payload: ActivityTypes[];
};
type UpdateActivity = {
  type: ActionTypes.UPDATE_ACTIVITY;
  payload: ActivityTypes;
};
type DeleteActivity = {
  type: ActionTypes.DELETE_ACTIVITY;
  payload: ActivityTypes;
};
export type UserActions = LoginUser | LogoutUser;
export type ActivitiesActions =
  | CreateActivity
  | ReadActivities
  | UpdateActivity
  | DeleteActivity;
