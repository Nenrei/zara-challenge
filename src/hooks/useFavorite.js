import { useState } from 'react';
import { useMarvelContext } from '../context/marvelContext';

const useFavorite = (characterData) => {
    const {
        states: {
            favorite: { favoriteCharacters, setFavoriteCharacters },
        },
        actions: { isFavoriteCharacter },
    } = useMarvelContext();

    const toggleFavorite = (characterData) => {
        const isFavorite = favoriteCharacters.some((el) => el.id === characterData.id);

        const favCopy = [...favoriteCharacters];

        if (isFavorite) {
            favCopy.splice(
                favCopy.findIndex((el) => el.id === characterData.id),
                1,
            );
        } else {
            favCopy.push(characterData);
        }

        setFavoriteCharacters(favCopy);
    };

    return { favoriteCharacters, toggleFavorite };
};

export default useFavorite;
