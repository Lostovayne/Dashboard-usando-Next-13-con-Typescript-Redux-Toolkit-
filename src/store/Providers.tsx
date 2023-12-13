"use client";
import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemon/pokemonSlice";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
        store.dispatch(setFavoritePokemons(favorite));
    }, []);

    return <Provider store={store}>{children}</Provider>;
};
