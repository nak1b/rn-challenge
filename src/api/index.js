/*
* Services
*/

const BASE_URL        = 'http://api.pumpup.com/1'
const API_VERSION     = '5.0.5'
const SESSION_TOKEN   = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUz' +
  'NTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'


export const fetchProfile = () => {
  return fetch(`${BASE_URL}/classes/User/318381`, {
    method  : 'POST',
    headers : {
      'Accept'      : 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      '_method'       : 'GET',
      '_version'      : API_VERSION,
      '_SessionToken' : SESSION_TOKEN
    })
  })
}

export const fetchUserFeed = () => {
  return fetch(`${BASE_URL}/functions/feed/profile/load-batch`, {
    method  : 'POST',
    headers : {
      'Accept'      : 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'isThumbnailsOnly': true,
      'limit'           : 5,
      'userId'          : 2707798,
      '_method'         : 'POST',
      '_version'        : API_VERSION,
      '_SessionToken'   : SESSION_TOKEN
    })
  })
}

export const fetchPopularPosts = () => {
  return fetch(`${BASE_URL}/functions/feed/popular/load-batch`, {
    method  : 'POST',
    headers : {
      'Accept'      : 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'isThumbnailsOnly': true,
      'limit'           : 18,
      '_method'         : 'POST',
      '_version'        : API_VERSION,
      '_SessionToken'   : SESSION_TOKEN
    })
  })
}
