import { useRef, useState } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const hanldeTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
        gifsCache.current[term] = gifs;
    }

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();

        if (!query) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0, 7));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);

        gifsCache.current[query] = gifs;

    }

    return {
        gifs,
        previousTerms,

        hanldeTermClicked,
        handleSearch
    }
}
