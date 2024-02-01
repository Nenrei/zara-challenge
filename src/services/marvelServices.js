import axios from 'axios';

export let marvelAxios = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    timeout: 5000,
});

const config = {
    headers: { 'Content-Type': 'application/json' },
};

const apikey = '1a19eba14d8a4d15f69f1219622b13bf';

const CACHE_TTL = 60; //seconds
const cache = [];
const getCacheItem = (path) => cache.find((el) => el.path === path);
const existInCache = (path) => {
    const item = cache.find((el) => el.path === path);
    if (item == null) {
        return false;
    }

    const time = (new Date() - item.date) / 1000;
    if (time > CACHE_TTL) {
        removeFromCache(path);
        return false;
    }

    return true;
};
const addToCache = (path, data) => {
    cache.push({ path, data, date: new Date() });
};
const removeFromCache = (path) => {
    cache.splice(
        cache.findIndex((el) => el.path === path),
        1,
    );
};

const parseResult = (path, result) => {
    const data = result.data.data.results;
    addToCache(path, data);
    return data;
};

const returnCacheOrRest = (path) => {
    if (existInCache(path)) {
        return new Promise((resolve) => {
            resolve(getCacheItem(path).data);
        });
    } else {
        return marvelAxios.get(path, config).then((result) => parseResult(path, result));
    }
};

export const getMarvelCharacters = (name) => {
    const path = `/characters?apikey=${apikey}&limit=50${name ? `&nameStartsWith=${name}` : ''}`;
    return returnCacheOrRest(path);
};

export const getMarvelCharacter = (characterId) => {
    const path = `/characters/${characterId}?apikey=${apikey}`;
    return returnCacheOrRest(path);
};

export const getMarvelCharacterComics = (characterId) => {
    const path = `/characters/${characterId}/comics?apikey=${apikey}&limit=20&orderBy=onsaleDate`;
    return returnCacheOrRest(path);
};
