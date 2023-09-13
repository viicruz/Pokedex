import { Touchable, TouchableOpacity, View } from 'react-native'
import { style } from './style'
import { useNavigation } from "@react-navigation/native";
import type {
  BottomTabBarProps
} from '@react-navigation/bottom-tabs'


import Home from '../../../screens/Home'
import Favorite from '../../../screens/Favorite'

import { House, Star } from 'phosphor-react-native'


interface Props extends BottomTabBarProps { }

export default function TabBar(props: Props) {
  const navigation = useNavigation();

  function handleTabBarNavigationToHome(){
    navigation.navigate("Home" as never);
  }

  function handleTabBarNavigationToFavorite(){
    navigation.navigate("Favorite" as never);
  }


  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleTabBarNavigationToHome} style={style.tabButton}>
        
      <House size={32} color='red'/>
      </TouchableOpacity >
      <TouchableOpacity onPress={handleTabBarNavigationToFavorite} style={style.tabButton}>

        <Star size={32} color='red'/>
      </TouchableOpacity>
    </View>

  )
}