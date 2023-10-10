import { useQuery } from "@tanstack/react-query";

type apiResponse = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

async function getPaginatedPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
  const response = await fetch(url);
  const tmp = await response.json();
  console.log("linha tal dos bagui", tmp);
  return tmp as apiResponse;
}

export default function usePaginatedPokemons() {
  return useQuery(["Pokedex"], getPaginatedPokemons);
}
