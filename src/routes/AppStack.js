import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const AppStack = ({pullUpBottomSheet}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home Screen">
        {() => <HomeScreen pullUpBottomSheet={pullUpBottomSheet} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};