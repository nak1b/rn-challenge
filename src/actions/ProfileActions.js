import * as api from '../api'

/*
* TYPES
*/
export const FETCHING_PROFILE_INFO      = 'fetchingProfileInfo'
export const PROFILE_FETCH_SUCCESS      = 'profileFetchSuccess'
export const PROFILE_FETCH_FAIL         = 'profileFetchFail'
export const USER_FEED_FETCH_SUCCESS    = 'userFeedFetchSuccess'
export const POPULAR_POST_FETCH_SUCCESS = 'popularPostFetchSuccess'
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

export const fetchFeedPhotos = () => {
  return dispatch => {
    api.fetchUserFeed()
      .then(res => res.json())
      .then(jsonRes => {
        userFeedFetchSuccess(dispatch, jsonRes)
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }
}

export const fetchPopularPosts = () => {
  return dispatch => {
    api.fetchPopularPosts()
      .then(res => res.json())
      .then(jsonRes => {
        popularPostFetchSuccess(dispatch, jsonRes)
      })
      .catch(err => {
        console.log(`Error: ${err}`)
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

const userFeedFetchSuccess = (dispatch, data) => {
  dispatch({
    type: USER_FEED_FETCH_SUCCESS,
    payload: data
  })
}

const popularPostFetchSuccess = (dispatch, data) => {
  dispatch({
    type: POPULAR_POST_FETCH_SUCCESS,
    payload: data
  })
}
