import { UserActions } from '../Actions';
import { ActionTypes } from '../ActionTypes';

type UserStateTypes = {
  user: string | null;
  token: string | null;
};
const initialState: UserStateTypes = {
  user: null,
  token: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        user: action.payload.user,
        token: action.payload.token,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
export default userReducer;
