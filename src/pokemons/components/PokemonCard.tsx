import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart } from "react-icons/io5";

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon;

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className=" flex flex-col  bg-white rounded overflow-hidden shadow-lg">
                <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                        alt={pokemon.name}
                        width={110}
                        height={110}
                        className="rounded-xl object-contain w-28 h-28 drop-shadow"
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize ">
                        {name}
                    </p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más Información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link
                        href="/dashboard/main"
                        className="px-4 py-2 hover:bg-gray-100 flex"
                    >
                        <div className="text-red-500">
                            <IoHeart size={23} />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                Remove Favorite
                            </p>
                            <p className="text-xs text-gray-500">
                                Más información
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
