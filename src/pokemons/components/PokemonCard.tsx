"use client";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispach, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemon/pokemonSlice";

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const dispatch = useAppDispach();
    const { id, name } = pokemon;
    const isFavorite = useAppSelector((state) => !!state.pokemons[id]);

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon));
    };

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className=" flex flex-col  bg-portage-900  rounded-xl  overflow-hidden shadow-lg">
                <div className=" flex flex-col items-center justify-center text-center p-6 bg-portage-950 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                        alt={pokemon.name}
                        width={110}
                        height={110}
                        className="rounded-xl object-contain w-28 h-28 drop-shadow"
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-white capitalize ">{name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-white"
                        >
                            Más Información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={onToggle} className="px-4 py-2 hover:bg-portage-800 flex   cursor-pointer ">
                        <div className="text-red-500">
                            {isFavorite ? <IoHeart size={25} /> : <IoHeartOutline size={25} />}
                        </div>
                        <div className="pl-6 space-y-2">
                            <p className="text-xs font-medium text-white leading-none">
                                {isFavorite ? "Agregar Favorito" : "Quitar de Favorito"}
                            </p>
                            <p className="text-xs text-white">Más información</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
