import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { typeColors, typeBgColors, typeBorderColors, typeColorVariants } from '../../../assets/pokeColors/styles'



type Props = {
  title: string;
  image: string;
  type: string[],
};


export default function PokeCard(props: Props) {
  const { title, image, type } = props;

  // Função para renderizar as badges de tipo
  const renderTypeBadges = () => {
    return type.map((typeName, index) => {
      const formmatedPokeTypeText = typeName.charAt(0).toUpperCase() + typeName.slice(1);

      const backgroundColor = typeColors[typeName.toLowerCase()] || 'grey';

      return (
        <LinearGradient start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} colors={[`${typeColorVariants[typeName.toLowerCase()]}`, `${backgroundColor}`,]} key={index} style={[styles.badge, { backgroundColor }]}>
          <Text style={styles.badgeText}>{formmatedPokeTypeText}</Text>
        </LinearGradient>
      );
    });
  };

  const formmatPokeName = title.charAt(0).toUpperCase() + title.slice(1);
  const backgroundColor = typeBgColors[props.type[0].toLowerCase()] || 'gray';
  const borderColor = typeBorderColors[props.type[0].toLowerCase()] || 'gray';

  return (
    <View style={[styles.wrap, { backgroundColor }, { borderColor }]}>
      <Text style={styles.titleContainer}>{formmatPokeName}</Text>
      <Image source={{ uri: image }} style={{ width: 120, height: 120 }} />
      <View style={styles.badgesContainer}>
        {renderTypeBadges()}
      </View>
    </View>
  );
}
