import { FavoritePokemons } from "@/pokemons";

export const metadata = {
    title: "Favorites",
    description: "Listado  de pokemons favoritos",
};

export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            {/* <span className="text-2xl font-medium text-center text-gray-700 mt-4 mb-6">
                Pokemons Favoritos
            </span> */}

            <FavoritePokemons />
        </div>
    );
}
