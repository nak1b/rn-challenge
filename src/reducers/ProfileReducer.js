import {
  FETCHING_PROFILE_INFO,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL
} from '../actions/ProfileActions'


const INITIAL_STATE = {
  loading      : false,
  error        : null,
  profileInfo  : {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCHING_PROFILE_INFO:
    return {
      ...state,
      loading: true
    }

  case PROFILE_FETCH_SUCCESS:
    return {
      ...state,
      profileInfo: action.payload
    }

  case PROFILE_FETCH_FAIL:
    return {
      ...state,
      loading: false,
      error: action.payload
    }

  default:
    return state
  }
}
