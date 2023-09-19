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
        
        // Mapeie os resultados para formatá-los como você precisa
        const formattedData = data.results.map((result, index) => ({
          id: index + 1,
          pokename: result.name,
          pokeimage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
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
        renderItem={({ item }) => <PokeCard image={item.pokeimage} title={item.pokename.toUpperCase()} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
