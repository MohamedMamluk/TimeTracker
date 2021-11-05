import { ActivitiesActions } from '../Actions';
import { ActionTypes } from '../ActionTypes';
type Activity = {};
const initialState: Activity[] = [];

const activitiesReducer = (state = initialState, action: ActivitiesActions) => {
  switch (action.type) {
    case ActionTypes.CREATE_ACTIVITY:
      break;
    case ActionTypes.READ_ACTIVITIES:
      break;
    case ActionTypes.UPDATE_ACTIVITY:
      break;
    case ActionTypes.DELETE_ACTIVITY:
      break;

    default:
      return state;
      break;
  }
};
export default activitiesReducer;
