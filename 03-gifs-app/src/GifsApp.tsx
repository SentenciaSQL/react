import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

    const { gifs, previousTerms, handleSearch, hanldeTermClicked } = useGifs();

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />
            <SearchBar placeholder="Busca lo que quieras" onQuery={(query: string) => handleSearch(query)} />
            <PreviousSearches searches={previousTerms} onLabelClicked={hanldeTermClicked} />
            <GifsList gifs={gifs} />
        </>
    )
}
