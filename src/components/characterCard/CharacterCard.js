import React from 'react';
import styles from './CharacterCard.modules.css';
import PropTypes from 'prop-types';
import FavoriteButton from '../favoriteButton/FavoriteButton';
import { Link } from 'react-router-dom';

const CharacterCard = ({ characterData }) => {
    return (
        <div className={styles['character-card']}>
            <Link
                to={`/character/${characterData.id}`}
                className={styles['character-card__thumbnail']}
            >
                <img
                    src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                    alt={characterData.name}
                />
            </Link>
            <div className={styles['character-card__splitter']}></div>
            <div className={`${styles['character-card__name']} corner-triangle`}>
                <div className={styles['character-card__name__text']}>{characterData.name}</div>
                <div className={styles['character-card__name__icon']}>
                    <FavoriteButton
                        characterData={characterData}
                        boldIcon={true}
                        className={styles['character-card__fav-icon']}
                    />
                </div>
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
