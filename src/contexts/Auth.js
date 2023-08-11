import {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {_useAuth} from '../hooks/_useAuth';
const AuthContext = createContext({});
const AuthProvider = ({children}) => {
  const {googleAuth} = _useAuth();
  const [authData, setAuthData] = useState();
  const [loading, setLoading] = useState(true);
  async function loadStorageData() {try {
    const authDataSerialized = await AsyncStorage.getItem('@AuthData');if (
      authDataSerialized) {
        const _authData = JSON.parse(authDataSerialized);setAuthData(
          _authData);}} catch (error) {} finally {setLoading(false);}}
  const signIn = async () => {const _authData = await googleAuth();if (
    _authData?.type === 'success') {const token = _authData["authentication"][
      "accessToken"];setAuthData(token);AsyncStorage.setItem('@AuthData',
      JSON.stringify(token));}};
  const signOut = async () => {setAuthData(
    undefined);await AsyncStorage.removeItem('@AuthData');};
  useEffect(() => {loadStorageData();}, []);
  return (<AuthContext.Provider value={{authData, loading, signIn, signOut}}>{
    children}</AuthContext.Provider>)
}
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {throw new Error(
    'useAuth must be used within an AuthProvider');}
  return context;
}
export {AuthContext, AuthProvider, useAuth};