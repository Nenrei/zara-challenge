import React from 'react';
import { useMarvelContext } from '../../context/marvelContext';
import './CharacterCard.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CharacterCard = ({ characterData }) => {
    const {
        states: {
            favorite: { favoriteCharacters, setFavoriteCharacters },
        },
    } = useMarvelContext();

    const isFavorite = () => {
        return favoriteCharacters.find((el) => el.id === characterData.id) != null;
    };

    const heartClass = classNames({
        'char-card__name__fav': true,
        icon: true,
        'icon--heart-line-bold': !isFavorite(),
        'icon--heart': isFavorite(),
    });

    const toggleFavorite = () => {
        const favCopy = [...favoriteCharacters];

        if (isFavorite()) {
            favCopy.splice(
                favCopy.indexOf((el) => el.id === characterData.id),
                1,
            );
        } else {
            favCopy.push(characterData);
        }

        setFavoriteCharacters(favCopy);
    };

    return (
        <div className={'char-card'}>
            <div className={'char-card__thumbnail'}>
                <img
                    src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                    alt={characterData.name}
                />
            </div>
            <div className={'char-card__splitter'}></div>
            <div className={'char-card__name corner-triangle'}>
                <div className={'char-card__name__text'}>{characterData.name}</div>
                <div className={heartClass} onClick={toggleFavorite}></div>
            </div>
        </div>
    );
};

CharacterCard.propTypes = {
    characterData: PropTypes.shape({
        thumbnail: PropTypes.shape({
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired,
        }),
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default CharacterCard;
