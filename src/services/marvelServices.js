import axios from 'axios';

export let marvelAxios = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    timeout: 5000,
});

const config = {
    headers: { 'Content-Type': 'application/json' },
};

const apikey = '1a19eba14d8a4d15f69f1219622b13bf';

export const test = () => {
    return marvelAxios
        .get(`/characters?apikey=${apikey}&limit=50`, config)
        .then((result) => result.data.data.results);
};
