import { ActivitiesActions } from '../Actions';
import { ActionTypes } from '../ActionTypes';
import { ActivityTypes } from '../../ProjectsTypes';
const initialState: ActivityTypes[] = [];

const activitiesReducer = (state = initialState, action: ActivitiesActions) => {
  switch (action.type) {
    case ActionTypes.CREATE_ACTIVITY:
      const newActivity = action.payload;
      return [...state, newActivity];
    case ActionTypes.READ_ACTIVITIES:
      const fetchedActivities = action.payload;
      return (state = fetchedActivities);
    case ActionTypes.UPDATE_ACTIVITY:
      const payloadActivity = action.payload;
      const filteredActivities = state.filter(
        (activity) => activity._id !== payloadActivity._id
      );
      return [...filteredActivities, payloadActivity];
    case ActionTypes.DELETE_ACTIVITY:
      const removedActivity = action.payload;
      const newFilteredActivities = state.filter(
        (activity) => activity._id !== removedActivity._id
      );
      return [...newFilteredActivities];

    default:
      return state;
  }
};
export default activitiesReducer;
