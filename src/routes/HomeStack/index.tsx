import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Heart } from 'phosphor-react-native';

import Home from '../../screens/Home';
import Favorite from '../../screens/Favorite'

import { styles } from './style';


const Tab = createBottomTabNavigator();


export default function HomeStack() {

  const navigation = useNavigation();



  return (

    <Tab.Navigator tabBar={(e) => { return <></> }}>
      <Tab.Screen name='Home' component={Home} options={{
        header: () => {
          return (
            <View style={styles.headerContainer}>

              <StatusBar backgroundColor={"#e01c4c"} />
              <View style={styles.headerTitleContainer}>

                <View style={styles.dexBallLarge}>
                  <View style={styles.dexBallMedium}>

                    <View style={styles.dexBallSmall}>

                      <View style={styles.dexBallXsmall}>
                      </View>

                    </View>

                  </View>
                </View>

                <View>
                  <Text style={styles.headerTitle}>Pokédex</Text>
                </View>
                <View>
                  <TouchableOpacity style={{ paddingRight: 20, paddingTop: 20 }} onPress={() => {
                    navigation.navigate("Favorite" as never);
                  }}>
                    <Heart size={24} color='white' />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        },
      }} />
      <Tab.Screen name='Favorite' component={Favorite} />


    </Tab.Navigator>
  );
}