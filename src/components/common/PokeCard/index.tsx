import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { typeColors, typeBgColors, typeBorderColors, typeColorVariants } from '../../../assets/pokeColors/styles'
import usePokemon from '../../../Hooks/Queries/usePokemon';

type Props = {
  name: string;
};


export default function PokeCard(props: Props) {
  const {name} = props;
  const pokemon = usePokemon(1);

  // Função para renderizar as badges de tipo
  const renderTypeBadges = () => {
    return pokemon.data.types.map((types, index) => {
      const formmatedPokeTypeText = types.charAt(0).toUpperCase() + types.slice(1);

      const backgroundColor = typeColors[typeName.toLowerCase()] || 'grey';

      return (
        <LinearGradient start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} colors={[`${typeColorVariants[typeName.toLowerCase()]}`, `${backgroundColor}`,]} key={index} style={[styles.badge, { backgroundColor }]}>

          <Text style={styles.badgeText}>{formmatedPokeTypeText}</Text>

        </LinearGradient>
      );
    });
  };

  const formmatPokeName = name.charAt(0).toUpperCase() + name.slice(1);
  const backgroundColor = typeBgColors[props.types[0].toLowerCase()] || 'gray';
  const borderColor = typeBorderColors[props.types[0].toLowerCase()] || 'gray';

  return (
    <View style={[styles.wrap, { backgroundColor }, { borderColor }]}>
      <View style={styles.pkmInfo}>
        <View>
          <Text style={styles.idContainer}>#0{props.id}</Text>
        </View>
        <Text style={styles.titleContainer}>{formmatPokeName}</Text>
        <View style={styles.badgesContainer}>
          {renderTypeBadges()}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/pokeballBackground.png')} style={{ width: 150, height: 150, position: 'relative', opacity: 0.4 }}></Image>

        <Image source={{ uri: image }} style={{ width: 120, height: 120, position: 'absolute' }} />

      </View>

    </View>
  );
}
