import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export type Pokeresults = {
  name: string;
  url: string;
};

type apiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokeresults[];
};

async function getPaginatedPokemons(url: string) {
  const response = await fetch(url);
  const tmp = await response.json();
  return tmp as apiResponse;
}

export function usePaginatedPokemons() {

  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
  );
  const [pagination, setPagination] = useState({
    count: 0,
    next: "",
    previous: "",
  });

  const [pokemons, setPokemons] = useState<Pokeresults[]>([]);

  const query = useQuery(["Pokedex", page], () => {
    return getPaginatedPokemons(page);
  });

  useEffect(() => {
    if (query.data && query.data.results && query.data.results.length > 0) {
      const tmp = query.data;
      setPagination({
        count: tmp.count,
        next: tmp.next,
        previous: tmp.previous,
      });

      setPokemons((prevPokemon) => {
        return prevPokemon.concat(tmp.results);
      });
    }
  }, [query.data]);

  const nextPage = () => {
    setPage(pagination.next);
    
  };
  return { query, nextPage, pokemons };
}
