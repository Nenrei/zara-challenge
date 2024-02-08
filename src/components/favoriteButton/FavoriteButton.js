import React from 'react';
import styles from './FavoriteButton.modules.css';
import PropTypes from 'prop-types';
import useFavorite from '../../hooks/useFavorite/useFavorite';
import Icon, { ICON_TYPES } from '../icon/Icon';

const FavoriteButton = ({ characterData, boldIcon, className }) => {
    const { isFavoriteCharacter, toggleFavorite } = useFavorite(characterData);

    const getIconType = () => {
        if (isFavoriteCharacter(characterData.id)) {
            return ICON_TYPES.HEART;
        }

        return boldIcon ? ICON_TYPES.HEART_LINE_BOLD : ICON_TYPES.HEART_LINE;
    };

    return (
        <div
            className={styles['favorite-button']}
            onClick={(e) => {
                e.stopPropagation();
                toggleFavorite();
            }}
        >
            <Icon type={getIconType()} className={className} />
        </div>
    );
};

FavoriteButton.propTypes = {
    characterData: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    boldIcon: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

export default FavoriteButton;
