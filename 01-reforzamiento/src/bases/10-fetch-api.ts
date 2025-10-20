import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'ZIepSdrUF8xunEcME8BRb83gzA0H7Dge';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
}

myRequest
    .then((response) => response.json()
    .then(({data}: GiphyRandomResponse) => {

        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    }))
    .catch((err) => {
        console.error(err);
    })