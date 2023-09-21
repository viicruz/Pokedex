import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import React from 'react';

type Props = {
  title: string;
  image: string;
  type: string[],

};

const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};



export default function index(props: Props) {

  const backgroundColor = typeColors[props.type[0].toLowerCase()] || 'gray';
  return (
    <View style={[styles.wrap, { backgroundColor }]}>
      <Text style={styles.titleContainer}>{props.title}</Text>
      <Image source={{ uri: props.image }} style={{ width: 120, height: 120 }} />
      <Text style={styles.pokeTypeContainer}>{props.type.join(" ")}</Text>
    </View>
  );
}
