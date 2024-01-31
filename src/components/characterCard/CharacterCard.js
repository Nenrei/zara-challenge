import React from 'react';
import { useMarvelContext } from '../../context/marvelContext';
import './CharacterCard.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const CharacterCard = ({ characterData }) => {
    const navigate = useNavigate();

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
        'icon--heart-line-bold': !isFavorite,
        'icon--heart': isFavorite,
    });

    const handleCardClick = () => {
        navigate(`/character/${characterData.id}`);
    };

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

    return (
        <div className={'char-card'} onClick={handleCardClick}>
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
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default CharacterCard;
