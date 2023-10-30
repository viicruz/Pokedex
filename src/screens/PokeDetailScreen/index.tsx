import React from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { styles } from './styles'
import PokemonDetail from '../../components/common/PokemonDetail'

type Props = {}

export default function PokeDetailScreen({ route }) {
    const { name, imageUrl } = route.params;    
    return (
        <SafeAreaView style={styles.wrap}>
            <PokemonDetail name={name} imageUrl={imageUrl} />
        </SafeAreaView>

    )
}