//Libraries imports
import { View, TextInput } from 'react-native'
import { styles } from './styles';

//Hooks imports
import { useState, useEffect } from 'react'
import useDebounce from '../../../Hooks/useDebouncer';


type Props = {
    icon: React.ReactNode
    pokeSearch: (query: string) => void
}

export default function SearchBar(props: Props) {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);
    useEffect(() => {
        props.pokeSearch(query);
    }, [debouncedQuery]);

    return (
        <View style={styles.wrap}>
            <View style={styles.inputContainer}>
                <View>
                    {props.icon}
                </View>
                <TextInput placeholder='Search for Pokémon...' onChangeText={(text) => setQuery(text)} />
            </View>
        </View>
    )
}