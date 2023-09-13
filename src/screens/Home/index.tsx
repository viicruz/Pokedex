import {
    View,
    FlatList,
    Text,
    SafeAreaView
} from "react-native";
import PokeCard from '../../components/common/PokeCard'
import TabBar from '../../components/common/TabBar'
type Props = {}

export default function Home({ }: Props) {
    const pokeData = [
        {
            id: 1, pokename: 'Bulbasaur', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        },
        {
            id: 2, pokename: 'Ivysaur', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
        },
        {
            id: 3, pokename: 'Venusaur', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
        },
        {
            id: 4, pokename: 'Charmander', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
        }, {
            id: 5, pokename: 'Charmeleon', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
        }, {
            id: 6, pokename: 'Charizard', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
        }, {
            id: 7, pokename: 'Squirtle', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
        }, {
            id: 8, pokename: 'Wartortle', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
        }, {
            id: 9, pokename: 'Blastoise', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
        },
        {
            id: 10, pokename: 'Caterpie', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
        },
        {
            id: 11, pokename: 'Metapod', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
        },
        {
            id: 12, pokename: 'Butterfree', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'
        },
        {
            id: 13, pokename: 'Weedle', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png'
        },
        {
            id: 14, pokename: 'Kakuna', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png'
        },
        {
            id: 15, pokename: 'Beedrill', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'
        },
        {
            id: 16, pokename: 'Pidgey', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png'
        },
        {
            id: 17, pokename: 'Pidgeotto', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png'
        },
        {
            id: 18, pokename: 'Pidgeot', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png'
        },
        {
            id: 19, pokename: 'Ratata', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
        },
        {
            id: 20, pokename: 'Raticate', pokeimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png'
        },
    ]
    return (
        <SafeAreaView>
            <FlatList
                numColumns={2}
                data={pokeData}
                renderItem={({ item }) => <PokeCard image={item.pokeimage} title={item.pokename} />}
                keyExtractor={(item) => item.id + ''}
            />

            

        </SafeAreaView>
    )
}