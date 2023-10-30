import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Login"
import SignUp from '../screens/SignUp';
import HomeStack from './HomeStack';
import PokeDetailScreen from '../screens/PokeDetailScreen';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='HomeStack' component={HomeStack} />
        <Stack.Screen name='PokeDetailScreen' component={PokeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

