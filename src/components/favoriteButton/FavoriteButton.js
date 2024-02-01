import React from 'react';
import { useMarvelContext } from '../../context/marvelContext';
import classNames from 'classnames';

const FavoriteButton = ({ characterData, boldIcon }) => {
    const {
        states: {
            favorite: { favoriteCharacters, setFavoriteCharacters },
        },
        actions: { isFavoriteCharacter },
    } = useMarvelContext();

    const isFavorite = isFavoriteCharacter(characterData.id);

    const heartClass = classNames({
        'char-card__name__fav': true,
        icon: true,
        'icon--heart-line-bold': boldIcon && !isFavorite,
        'icon--heart-line': !boldIcon && !isFavorite,
        'icon--heart': isFavorite,
    });

    const toggleFavorite = (e) => {
        e.stopPropagation();

        const favCopy = [...favoriteCharacters];

        if (isFavorite) {
            favCopy.splice(
                favCopy.indexOf((el) => el.id === characterData.id),
                1,
            );
        } else {
            favCopy.push(characterData);
        }

        setFavoriteCharacters(favCopy);
    };

    return <div className={heartClass} onClick={toggleFavorite}></div>;
};

export default FavoriteButton;
