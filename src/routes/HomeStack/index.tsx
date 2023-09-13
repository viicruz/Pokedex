import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Favorite from '../../screens/Favorite'
import TabBar from '../../components/common/TabBar'

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator tabBar={(e) => { return <TabBar {...e} /> }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Favorite' component={Favorite}/>
    </Tab.Navigator>
  );
}