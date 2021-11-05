import { ActionTypes } from '../ActionTypes';
import { Dispatch } from 'redux';
import { UserActions } from '../Actions';

export const loginUser = (user: string) => {
  return (dispatch: Dispatch<UserActions>) => {
    console.log('login');
    dispatch({ type: ActionTypes.LOGIN_USER, payload: user });
  };
};
export const logoutUser = () => {
  return (dispatch: Dispatch<UserActions>) => {
    console.log('logout');

    dispatch({ type: ActionTypes.LOGOUT_USER, payload: null });
  };
};
