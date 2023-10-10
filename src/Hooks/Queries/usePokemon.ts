import { useQuery } from "@tanstack/react-query";
type apiResponse = {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  heigh: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any[];
  sprites: any[];
  stats: any[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};
async function getPokemon(id: number) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const response = await fetch(url);
  return (await response.json()) as apiResponse;
}

export default function usePokemon(id: number) {
  return useQuery(
    ["Pokemon", id],
    () => {
      return getPokemon(id);
    },
    {
      //5 minutes
      cacheTime: 1000 * 60 * 60 * 5,
    }
  );
}
