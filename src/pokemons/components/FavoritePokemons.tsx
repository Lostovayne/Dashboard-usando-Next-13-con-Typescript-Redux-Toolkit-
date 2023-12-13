"use client";

import { useAppSelector } from "@/store";
import { useEffect, useMemo, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);
    const PokemonsFav = useMemo(() => Object.values(favoritePokemons), [favoritePokemons]);
    const [pokemons, setPokemons] = useState(PokemonsFav);

    useEffect(() => {
        setPokemons(PokemonsFav)
    },[PokemonsFav])

 
    return (
        <> {
            pokemons.length 
            ? <PokemonGrid pokemons={pokemons} />
            : <NoFavorite /> 
            }
        </>
    );
};

export const NoFavorite = () => {
    return (
        <div className="flex flex-col h-[50vh mt-16 items-center justify-center">
            <IoHeartOutline size={100} className="text-red-400" />
            <span className="text-2xl font-medium text-center text-red-400 mt-4 mb-6">
                No hay favoritos
            </span>
        </div>
    );
};
