import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import useFavorite from '../../hooks/useFavorite';

const FavoriteButton = ({ characterData, boldIcon }) => {
    const { isFavoriteCharacter, toggleFavorite } = useFavorite(characterData);

    const heartClass = classNames({
        'char-card__name__fav': true,
        icon: true,
        'icon--heart-line-bold': boldIcon && !isFavoriteCharacter(),
        'icon--heart-line': !boldIcon && !isFavoriteCharacter(),
        'icon--heart': isFavoriteCharacter(),
    });

    return <div className={heartClass} onClick={toggleFavorite}></div>;
};

FavoriteButton.propTypes = {
    characterData: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    boldIcon: PropTypes.bool.isRequired,
};

export default FavoriteButton;
