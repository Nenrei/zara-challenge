import { useMarvelContext } from '../../context/marvelContext';

const useFavorite = (characterData) => {
    const {
        states: {
            favorite: { favoriteCharacters, setFavoriteCharacters },
        },
    } = useMarvelContext();

    const isFavoriteCharacter = () => {
        return favoriteCharacters.find((el) => el.id === characterData.id) != null;
    };

    const toggleFavorite = () => {
        const favCopy = [...favoriteCharacters];

        if (isFavoriteCharacter()) {
            const updatedFavorites = favCopy.filter((el) => el.id !== characterData.id);
            setFavoriteCharacters(updatedFavorites);
        } else {
            favCopy.push(characterData);
            setFavoriteCharacters(favCopy);
        }
    };

    return { isFavoriteCharacter, toggleFavorite };
};

export default useFavorite;
