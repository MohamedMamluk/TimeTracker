import { UserActions } from '../Actions';
import { ActionTypes } from '../ActionTypes';

type UserStateTypes = {
  user: string | null;
};
const initialState: UserStateTypes = {
  user: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        user: action.payload,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
