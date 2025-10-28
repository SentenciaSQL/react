import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface Props {
    id: number;
}

export const usePokemon = ({ id }: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoaging] = useState(true);

    const getPokemonById = async (id: number) => {
        setIsLoaging(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemon({
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

        setIsLoaging(false);
    }

    useEffect(() => {
        getPokemonById(id);
    }, [id])

    return {
        isLoading,
        pokemon,

        formatedId: id.toString().padStart(3, '0')
    }
}
