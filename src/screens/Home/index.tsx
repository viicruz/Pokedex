import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, TextInput, View } from "react-native";
import { styles } from "./styles"
import { MagnifyingGlass } from "phosphor-react-native";

//Components Imports
import PokeCard from '../../components/common/PokeCard';
import SearchBar from "../../components/common/SearchBar";

//Hook imports
import usePaginatedPokemons from "../../Hooks/Queries/usePaginatedfPokemons";

export default function Home() {
  const [searchPokemon, setSearchPokemon] = useState('');
  const paginatedfPokemons = usePaginatedPokemons();



  return (
    <SafeAreaView style={styles.container}>
      <SearchBar icon={<MagnifyingGlass size={20} />} onSearch={() => { }} />

      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={paginatedfPokemons.data.results}
        renderItem={({ item }) => (
          <PokeCard name={item.name} />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
