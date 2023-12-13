
import { Text, View } from 'react-native'; // Importe o Text da biblioteca React Native
import { LinearGradient } from 'expo-linear-gradient';
import { typeColors, typeColorVariants } from '../../../assets/pokeColors/styles';
import usePokemon from '../../../Hooks/Queries/usePokemon';
import { styles } from './styles';

type Props = {
  name: string;
};

const RenderTypeBadges: React.FC<Props> = (props) => {
  const { name } = props;
  const pokemon = usePokemon(name);

  // Função para renderizar as badges de tipo
  const renderTypeBadges = () => {
    return pokemon.data.types.map((types, index) => {
      const formattedPokeTypeText = types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1);
      const backgroundColor = typeColors[types.type.name.toLowerCase()] || 'grey';

      return (
        <View style={styles.badgeContainer}>
          <LinearGradient start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} colors={[`${typeColorVariants[types.type.name.toLowerCase()]}`, `${backgroundColor}`,]} key={index} style={[styles.badge, { backgroundColor }]}>
            <Text style={styles.badgeText}>{formattedPokeTypeText}</Text>
          </LinearGradient>
        </View>

      );
    });
  };

  return (
    <>{renderTypeBadges()}</>
  );

};

export default RenderTypeBadges;
