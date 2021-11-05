import { ActionTypes } from '../ActionTypes';

type LoginUser = {
  type: ActionTypes.LOGIN_USER;
  payload: string;
};
type LogoutUser = {
  type: ActionTypes.LOGOUT_USER;
  payload: null;
};

type CreateActivity = {
  type: ActionTypes.CREATE_ACTIVITY;
};
type ReadActivities = {
  type: ActionTypes.READ_ACTIVITIES;
};
type UpdateActivity = {
  type: ActionTypes.UPDATE_ACTIVITY;
};
type DeleteActivity = {
  type: ActionTypes.DELETE_ACTIVITY;
};
export type UserActions = LoginUser | LogoutUser;
export type ActivitiesActions =
  | CreateActivity
  | ReadActivities
  | UpdateActivity
  | DeleteActivity;
