import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonState {
    favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = () => {
//     const favorite = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
//     return favorite;
// };

const initialState: PokemonState = {
    favorites:{}
};

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {

        setFavoritePokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
            state.favorites = action.payload;
        },


        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
                return;
            }

            state.favorites[id] = pokemon;
        },
    },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;
