import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles"
import { MagnifyingGlass } from "phosphor-react-native";
import { FlashList } from "@shopify/flash-list";

//Components Imports
import PokeCard from '../../components/common/PokeCard';
import SearchBar from "../../components/common/SearchBar";

//Hook imports
import usePaginatedPokemons from "../../Hooks/Queries/usePaginatedfPokemons";

export default function Home() {
  const [searchPokemon, setSearchPokemon] = useState('');
  const { nextPage, pokemons } = usePaginatedPokemons();



  return (
    <SafeAreaView style={styles.container}>
      <SearchBar icon={<MagnifyingGlass size={20} />} onSearch={() => { }} />
      {
        pokemons.length > 0 && <View style={{ flex: 1 }}>
          <FlashList
            estimatedItemSize={128}
            onEndReached={() => {
              nextPage();
            }}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            onEndReachedThreshold={0.5}
            data={pokemons || []}
            renderItem={({ item }) => (
              <PokeCard name={item.name} />
            )}
            keyExtractor={(item) => item.name}
          />
        </View> 
}
    </SafeAreaView>
  );
}
