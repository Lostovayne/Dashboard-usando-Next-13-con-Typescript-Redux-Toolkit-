"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons));
    return <PokemonGrid pokemons={favoritePokemons} />;
};
