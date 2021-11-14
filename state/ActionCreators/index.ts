import { ActionTypes } from '../ActionTypes'
import { Dispatch } from 'redux'
import { UserActions, ActivitiesActions } from '../Actions'
import { ActivityTypes } from '../../ProjectsTypes'

export const loginUser = (user: string, token: string) => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: { user: user, token: token }
    })
  }
}
export const logoutUser = () => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: ActionTypes.LOGOUT_USER,
      payload: { user: null, token: null }
    })
  }
}

export const readActivities = (activities: ActivityTypes[]) => {
  return (dispatch: Dispatch<ActivitiesActions>) => {
    dispatch({
      type: ActionTypes.READ_ACTIVITIES,
      payload: activities
    })
  }
}
export const createActivity = (activity: ActivityTypes) => {
  return (dispatch: Dispatch<ActivitiesActions>) => {
    dispatch({
      type: ActionTypes.CREATE_ACTIVITY,
      payload: activity
    })
  }
}
export const patchActivities = (activity: ActivityTypes) => {
  return (dispatch: Dispatch<ActivitiesActions>) => {
    dispatch({
      type: ActionTypes.UPDATE_ACTIVITY,
      payload: activity
    })
  }
}
export const deleteActivities = (activity: ActivityTypes) => {
  return (dispatch: Dispatch<ActivitiesActions>) => {
    dispatch({
      type: ActionTypes.DELETE_ACTIVITY,
      payload: activity
    })
  }
}
