import { useMarvelContext } from '../context/marvelContext';

const useFavorite = (characterData) => {
    const {
        states: {
            favorite: { favoriteCharacters, setFavoriteCharacters },
        },
    } = useMarvelContext();

    const isFavoriteCharacter = () => {
        return favoriteCharacters.find((el) => el.id === characterData.id) != null;
    };

    const toggleFavorite = (e) => {
        e.stopPropagation();

        const favCopy = [...favoriteCharacters];

        if (isFavoriteCharacter()) {
            favCopy.splice(
                favCopy.findIndex((el) => el.id === characterData.id),
                1,
            );
        } else {
            favCopy.push(characterData);
        }

        setFavoriteCharacters(favCopy);
    };

    return { isFavoriteCharacter, toggleFavorite };
};

export default useFavorite;
