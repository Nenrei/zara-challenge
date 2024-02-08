import React from 'react';
import styles from './FavoriteButton.modules.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import useFavorite from '../../hooks/useFavorite/useFavorite';

const FavoriteButton = ({ characterData, boldIcon }) => {
    const { isFavoriteCharacter, toggleFavorite } = useFavorite(characterData);

    const heartClass = classNames(styles['favorite-button'], 'icon', {
        'icon--heart-line-bold': boldIcon && !isFavoriteCharacter(),
        'icon--heart-line': !boldIcon && !isFavoriteCharacter(),
        'icon--heart': isFavoriteCharacter(),
    });

    return (
        <div
            className={heartClass}
            onClick={(e) => {
                e.stopPropagation();
                toggleFavorite();
            }}
        ></div>
    );
};

FavoriteButton.propTypes = {
    characterData: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    boldIcon: PropTypes.bool.isRequired,
};

export default FavoriteButton;
