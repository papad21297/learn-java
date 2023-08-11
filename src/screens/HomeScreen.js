import {Dimensions, StyleSheet, Button, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {homeScreenStyles} from './homeScreenStyles';
import {useAuth} from '../contexts/Auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreenLearnTab} from './HomeScreenLearnTab';
import {HomeScreenCodeTab} from './HomeScreenCodeTab';
import {
  HomeScreenLearnTabMinimumComponent
} from './HomeScreenLearnTabMinimumComponent';
const Tab = createBottomTabNavigator();
export const HomeScreen = ({pullUpBottomSheet}) => {
  const insets = useSafeAreaInsets()
  const componentHeight = Dimensions.get('window').height - (
    insets.top + insets.bottom
  );
  const componentWidth = Dimensions.get('screen').width;
  const styles = StyleSheet.create(homeScreenStyles);
  const auth = useAuth();
  const signOut = () => {auth.signOut();};
  const [loading, setLoading] = useState(true);
  const [userInfoDataObject, setUserInfoDataObject] = useState({});
  useEffect(() => {
    fetch(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      { method: 'GET', headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${auth.authData}`,
        'Content-Type': 'application/json'
      } }
    ).then((response) => {
      return(response.json())
    }).then((response) => {
      setUserInfoDataObject({"name": response?.name, "email": response?.email})
    }).finally(() => {
      setLoading(false);
    })
  }, []);
  /*
    const loading = false;
    const userInfoDataObject = {
      "name": "ปภัส เงาธัมมะสกุล",
      "email": "62070112@it.kmitl.ac.th"
    };
  */
  function TabContentEnclosing({children}) {};
  return (
    (!loading) ? (
      <Tab.Navigator initialRouteName='Learn' screenOptions={() => ({
        headerShown: false, tabBarStyle:{ height: componentHeight * 0.08,
        backgroundColor: 'hsl(210, 20%, 20%)' },
        tabBarActiveTintColor: "hsl(0, 0%, 100%)",
        tabBarInactiveTintColor: "hsl(0, 0%, 60%)",
        tabBarHideOnKeyboard: true})}>
        <Tab.Screen name='Learn' options={{tabBarLabel: 'เรียน', tabBarIcon:
          ({color, size }) => {return (<Icon name='book' size={size} color={
            color} />)}}}>
              {() => {return(
                // <HomeScreenLearnTabMinimumComponent
                //   pullUpBottomSheet={pullUpBottomSheet}
                // />
                <HomeScreenLearnTab
                  userInfoDataObject={userInfoDataObject} signOut={signOut}
                  pullUpBottomSheet={pullUpBottomSheet}
                />
              )}}
            </Tab.Screen>
        <Tab.Screen name='Code'options={{tabBarLabel: 'โค้ด', tabBarIcon: ({
            color, size }) => {return (<Icon name='code' size={size} color={
              color} />)}}} component={HomeScreenCodeTab} />
      </Tab.Navigator>
    ) : (null));
};