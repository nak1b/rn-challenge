import {
  FETCHING_PROFILE_INFO,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  USER_FEED_FETCH_SUCCESS,
  POPULAR_POST_FETCH_SUCCESS
} from '../actions/ProfileActions'


const INITIAL_STATE = {
  loading      : false,
  error        : null,
  profileInfo  : {},
  userFeed     : [],
  popularPosts : []
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

  case USER_FEED_FETCH_SUCCESS:
    return {
      ...state,
      userFeed: action.payload.result.posts
    }

  case POPULAR_POST_FETCH_SUCCESS:
    return {
      ...state,
      popularPosts: action.payload.result.posts
    }

  default:
    return state
  }
}
