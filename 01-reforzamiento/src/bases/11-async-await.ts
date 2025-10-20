import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'ZIepSdrUF8xunEcME8BRb83gzA0H7Dge';

const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
}

const getRandomGifUrl = async () : Promise<string> => {
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

    const {data}: GiphyRandomResponse = await response.json();

    return data.images.original.url;
};

getRandomGifUrl().then((url) => createImageInsideDOM(url));