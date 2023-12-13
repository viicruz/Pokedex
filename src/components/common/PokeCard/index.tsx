import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { Heart } from 'phosphor-react-native';
import { typeBgColors, typeBorderColors, typeColorVariants, typeColors } from '../../../assets/pokeColors/styles';
import usePokemon from '../../../Hooks/Queries/usePokemon';
import RenderTypeBadges from '../RenderTypeBadges';

type Props = {
  name: string;
  onPress: () => void;
};

export default function PokeCard(props: Props) {
  const { name } = props;
  const pokemon = usePokemon(props.name);
  const [heartColor, setHeartColor] = useState('white');
  const [previousHeartColor, setPreviousHeartColor] = useState('white');

  if (pokemon.isLoading) {
    return (
      <View style={styles.wrap}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const formattedPokeName = name.charAt(0).toUpperCase() + name.slice(1);
  const backgroundColor = typeBgColors[pokemon.data.types[0].type.name.toLowerCase()] || 'gray';
  const borderColor = typeBorderColors[pokemon.data.types[0].type.name.toLowerCase()] || 'gray'; 

  return (
    <View style={[styles.wrap, { backgroundColor }, { borderColor }]}>
      <View style={styles.pkmInfo}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.idContainer}>#0{pokemon.data.id}</Text>
        </View>
        <Text style={styles.titleContainer}>{formattedPokeName}</Text>
        <View style={styles.badgesContainer}>
          <RenderTypeBadges name={name} />
        </View>
      </View>

      <TouchableOpacity style={styles.imageContainer} onPress={props.onPress}>
        <Image source={require('../../../assets/pokeballBackground.png')} style={{ width: 150, height: 150, position: 'relative', opacity: 0.4 }} />
        <Image source={{ uri: pokemon.data.sprites.other['official-artwork'].front_default }} style={{ width: 120, height: 120, position: 'absolute' }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ display: 'flex', justifyContent: 'flex-start', right: 20 }} onPress={() => {
        const newColor = heartColor === 'red' ? 'white' : 'red';

        setPreviousHeartColor(heartColor);

        setHeartColor(newColor);
      }}>
        <Heart color={heartColor} weight='fill' size={24} />
      </TouchableOpacity>
    </View>
  );
}
