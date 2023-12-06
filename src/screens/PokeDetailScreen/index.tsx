import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native'
import { styles } from './styles'
import PokemonDetail from '../../components/common/PokemonDetail'
import { typeBgColors } from '../../assets/pokeColors/styles';
import usePokemon from '../../Hooks/Queries/usePokemon';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
    route: any;
    onPress: () => void;
}

export default function PokeDetailScreen({ route }: Props) {
    const { name, imageUrl } = route.params;
    const navigation = useNavigation();
    const pokemon = usePokemon(name);
    const backgroundColor = typeBgColors[pokemon.data.types[0].type.name.toLowerCase()] || 'gray';
    const pokeId = pokemon.data.id;

    return (
        <SafeAreaView >
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={{ backgroundColor, width: '100%', height: 80, }}>
                <View style={styles.headerContainer}>

                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <View style={{ paddingLeft: 20 }}>
                            <ArrowLeft color='white' size={24} />
                        </View>
                    </TouchableOpacity>


                    <View>
                        <Text style={{ fontWeight: '500', fontSize: 24, color: 'white', paddingRight: 20 }}>
                            #0{pokeId}
                        </Text>
                    </View>

                </View>

            </View>
            <PokemonDetail name={name} imageUrl={imageUrl} />
        </SafeAreaView>

    )
}