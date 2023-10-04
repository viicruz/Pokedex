import { TouchableOpacity, View } from 'react-native'
import { style } from './style'
import { useNavigation } from "@react-navigation/native";
import type {
  BottomTabBarProps
} from '@react-navigation/bottom-tabs'




import { House, Star } from 'phosphor-react-native'


interface Props extends BottomTabBarProps { }

export default function TabBar(props: Props) {
  const navigation = useNavigation();
  const position = props.state.index;

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Home" as never);
      }} style={style.tabButton}>

        <House size={32} color={position === 0 ? 'red' : 'grey'} />
      </TouchableOpacity >

      <TouchableOpacity onPress={() => {
        navigation.navigate("Favorite" as never);
      }} style={style.tabButton}>

        <Star color={position === 1 ? 'red' : 'grey'} size={32} />
      </TouchableOpacity>
    </View>

  )
}