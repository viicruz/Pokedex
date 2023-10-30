import React from 'react';
import { View, Text, Image } from 'react-native';
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

    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    return (
        <View>
            <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
            <Text style={{ textTransform: 'capitalize' }} >{name}</Text>
        </View>
    );
}
