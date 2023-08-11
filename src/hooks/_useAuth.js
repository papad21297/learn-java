import {useEffect} from 'react';
import {useAuthRequest} from 'expo-auth-session/providers/google';
import { fetchUserInfoAsync } from 'expo-auth-session';

function _useAuth () {
  const [googleRequest, googleResponse, googleAuth] = useAuthRequest({
    expoClientId:
      "337423792014-el2qnp1p3ijsbd49k7o8pisa80utu3mu.apps.googleusercontent.com",
    selectAccount: true
  })
  return {googleAuth}
}

export {_useAuth}