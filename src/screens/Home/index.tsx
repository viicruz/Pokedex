//Libraries imports
import React, { useState, useEffect } from "react";
import { SafeAreaView, View} from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";

// Components Imports
import PokeCard from '../../components/common/PokeCard';
import SearchBar from "../../components/common/SearchBar";

// Hook imports
import { usePaginatedPokemons, Pokeresults } from "../../Hooks/Queries/usePaginatedfPokemons";

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [pokemons, setPokemons] = useState<Pokeresults[]>([]);
  const { nextPage, pokemons: allPokemons, query: pokeQuery } = usePaginatedPokemons();

  // Atualizar a lista de Pokémon quando a consulta é alterada
  useEffect(() => {
    if (query === "") {
      setPokemons(allPokemons);
    } else {
      setPokemons(allPokemons.filter(pkm => pkm.name.toLowerCase().includes(query.toLowerCase())));
    }
  }, [query, allPokemons]);

  const navigation = useNavigation();

  const handlePokeCardClick = (name: string, imageUrl: string) => {  
    //@ts-ignore
    navigation.navigate('PokeDetailScreen', {
      name,
      imageUrl,
    });

  }

  return (
    <SafeAreaView style={styles.container}>
      

      <SearchBar icon={<MagnifyingGlass size={20} />} pokeSearch={setQuery} />

      {pokemons.length > 0 && (
        <View style={{ flex: 1 }}>
          <FlashList
            estimatedItemSize={128}
            onEndReached={() => {
              nextPage();
            }}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            onEndReachedThreshold={0.5}
            data={pokemons || []}
            renderItem={({ item }) => (
              <PokeCard onPress={ () => handlePokeCardClick(item.name, item.url) } name={item.name} />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
