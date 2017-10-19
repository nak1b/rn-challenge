import * as api from '../api'

/*
* TYPES
*/
export const FETCHING_PROFILE_INFO = 'fetchingProfileInfo'
export const PROFILE_FETCH_SUCCESS = 'profileFetchSuccess'
export const PROFILE_FETCH_FAIL    = 'profileFetchFail'


/*
* ACTIONS
*/
export const fetchProfileInfo = () => {
  return dispatch => {
    fetchingProfile(dispatch)

    api.fetchProfile()
      .then(res => res.json())
      .then(jsonRes => {
        profileFetchSuccess(dispatch, jsonRes)
      })
      .catch(err => {
        profileFetchFail(dispatch, err)
      })
  }
}


/*
* HELPERS
*/
const fetchingProfile = (dispatch) => {
  dispatch({
    type: FETCHING_PROFILE_INFO
  })
}

const profileFetchSuccess = (dispatch, data) => {
  dispatch({
    type: PROFILE_FETCH_SUCCESS,
    payload: data
  })
}

const profileFetchFail = (dispatch, error) => {
  dispatch({
    type: PROFILE_FETCH_FAIL,
    payload: error
  })
}
