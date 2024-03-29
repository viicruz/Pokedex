import { useQuery } from "@tanstack/react-query";

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Ability = {
  ability:{
    name:string,
    url:string,
  }
  is_hidden: boolean,
  slot:number,
}


interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    official_artwork: {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
}

export type apiResponse = {
  abilities: Ability[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any[];
  sprites: PokemonSprites;
  stats: Stat[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};
async function getPokemon(id: string | number) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const response = await fetch(url);
  return (await response.json()) as apiResponse;
}

export default function usePokemon(id: string | number) {
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
