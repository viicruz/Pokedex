import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { typeColors, typeBgColors, typeBorderColors, typeColorVariants } from '../../../assets/pokeColors/styles'
import usePokemon from '../../../Hooks/Queries/usePokemon';

type Props = {
  name: string;
};


export default function PokeCard(props: Props) {
  const { name } = props;
  const pokemon = usePokemon(props.name);
  if (pokemon.isLoading) {
    return (
      <View style={styles.wrap}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }
  // Função para renderizar as badges de tipo
  const renderTypeBadges = () => {
    return pokemon.data.types.map((types, index) => {
      const formmatedPokeTypeText = types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1);

      const backgroundColor = typeColors[types.type.name.toLowerCase()] || 'grey';
      return (
        <LinearGradient start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} colors={[`${typeColorVariants[types.type.name.toLowerCase()]}`, `${backgroundColor}`,]} key={index} style={[styles.badge, { backgroundColor }]}>

          <Text style={styles.badgeText}>{formmatedPokeTypeText}</Text>

        </LinearGradient>
      );
    });
  };

  const formmatPokeName = name.charAt(0).toUpperCase() + name.slice(1);
  const backgroundColor = typeBgColors[pokemon.data.types[0].type.name.toLowerCase()] || 'gray';
  const borderColor = typeBorderColors[pokemon.data.types[0].type.name.toLowerCase()] || 'gray';

  return (
    <View style={[styles.wrap, { backgroundColor }, { borderColor }]}>
      <View style={styles.pkmInfo}>
        <View>
          <Text style={styles.idContainer}>#0{pokemon.data.id}</Text>
        </View>
        <Text style={styles.titleContainer}>{formmatPokeName}</Text>
        <View style={styles.badgesContainer}>
          {renderTypeBadges()}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/pokeballBackground.png')} style={{ width: 150, height: 150, position: 'relative', opacity: 0.4 }} />
        <Image source={{ uri: pokemon.data.sprites.other['official-artwork'].front_default }} style={{ width: 120, height: 120, position: 'absolute' }} />
      </View>
    </View>
  );
}
