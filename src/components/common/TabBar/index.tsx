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
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Home" as never);
      }} style={style.tabButton}>
        
      <House size={32} color='red'/>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Favorite" as never);
      }} style={style.tabButton}>

        <Star size={32} color='red'/>
      </TouchableOpacity>
    </View>

  )
}