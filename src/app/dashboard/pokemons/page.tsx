import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
    title: "151 Pokemons",
    description: "151 Pokemons",
};

const getPokemons = async (
    limit = 20,
    offset = 0
): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    ).then((response) => response.json());

    const pokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
};

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col bg-white">
            <span className="text-2xl font-medium text-center text-gray-700 mt-4 mb-6">
                Listado de Pokémons Estáticos
            </span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}
