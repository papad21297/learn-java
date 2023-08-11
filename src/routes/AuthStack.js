import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../screens/SignInScreen';

const Stack = createStackNavigator();

function AuthStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sign In" component={SignInScreen} />
    </Stack.Navigator>
  )
}

export {AuthStack}