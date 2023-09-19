import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import React from 'react';

type Props = {
  title: string;
  image: string;
  type:string[],
 
};

export default function index(props: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.titleContainer}>{props.title}</Text>
      <Image source={{ uri: props.image }} style={{ width: 120, height: 120 }} />
      <Text style={styles.pokeTypeContainer}>{props.type.join(" ")}</Text>
    </View>
  );
}
