import React, { useState, useEffect } from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
import PokeCard from '../../components/common/PokeCard';

export default function Home() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    async function fetchPokeAPI() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();

        // Mapeie os resultados para formatá-los
        
          const formattedData = await Promise.all(data.results.map(async (result, index) => {
          const pokemonResponse = await fetch(result.url);
          const pokemonData = await pokemonResponse.json();
          const types = pokemonData.types.map((typeInfo) => typeInfo.type.name);

          return {
            id: index + 1,
            pokename: result.name,
            pokeimage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
            types: types,
          };
        }));

        setPokeData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchPokeAPI();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        data={pokeData}
        renderItem={({ item }) => <PokeCard image={item.pokeimage} title={item.pokename.toUpperCase()} type={item.types} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
