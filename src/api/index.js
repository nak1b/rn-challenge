/*
* Services
*/

const API_VERSION     = '5.0.5'
const SESSION_TOKEN  = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUz' +
  'NTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'


export const fetchProfile = () => {
  return fetch('http://api.pumpup.com/1/classes/User/318381', {
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
