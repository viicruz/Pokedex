//Libraries Imports
import { View, Text, Image } from 'react-native';


//Components Imports
import RenderTypeBadges from '../RenderTypeBadges';

//Styles Imports
import { styles } from './styles';
import { typeBgColors, typeBorderColors } from '../../../assets/pokeColors/styles';

//Hook Imports
import usePokemon from '../../../Hooks/Queries/usePokemon';


type Props = {
    name: string;
    imageUrl: string;
};

export default function PokeDetailScreen({ name }: Props) {

    const { data: pokemon, isLoading } = usePokemon(name);


    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const backgroundColor = typeBgColors[pokemon.types[0].type.name.toLowerCase()] || 'gray';
    const borderColor = typeBorderColors[pokemon.types[0].type.name.toLowerCase()] || 'gray';
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;
    return (
        <View >
            <View style={[styles.pkmInfoContainer, { backgroundColor }, { borderColor }]}>
                <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />

                <View>
                    <Text style={styles.titleContainer} >{name}</Text>
                </View>

                <View style={styles.typeContainer}>
                    <RenderTypeBadges name={name} />

                </View>

            </View>


        </View>
    );
}
