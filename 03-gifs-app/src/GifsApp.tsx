import { useState } from "react"
import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const hanldeTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();

        if (!query) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0, 7));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);

    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />
            <SearchBar placeholder="Busca lo que quieras" onQuery={(query: string) => handleSearch(query)} />
            <PreviousSearches searches={previousTerms} onLabelClicked={hanldeTermClicked} />
            <GifsList gifs={gifs} />
        </>
    )
}
