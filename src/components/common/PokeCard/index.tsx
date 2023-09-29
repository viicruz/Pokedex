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

export default function PokeCard(props: Props) {
  const { title, image, type } = props;

  // Função para renderizar as badges de tipo
  const renderTypeBadges = () => {
    return type.map((typeName, index) => {
      const backgroundColor = typeColors[typeName.toLowerCase()] || 'gray';

      return (
        <View key={index} style={[styles.badge, { backgroundColor }]}>
          <Text style={styles.badgeText}>{typeName}</Text>
        </View>
      );
    });
  };

  const backgroundColor = typeColors[props.type[0].toLowerCase()] || 'gray';

  return (
    <View style={[styles.wrap,{backgroundColor}]}>
      <Text style={styles.titleContainer}>{title}</Text>
      <Image source={{ uri: image }} style={{ width: 120, height: 120 }} />
      <View style={styles.badgesContainer }>
        {renderTypeBadges()}
      </View>
    </View>
  );
}
