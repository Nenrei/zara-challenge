import React from 'react';
import './CharacterCard.css';
import PropTypes from 'prop-types';
import FavoriteButton from '../favoriteButton/FavoriteButton';
import { Link } from 'react-router-dom';

const CharacterCard = ({ characterData }) => {
    return (
        <div className="char-card" role="card">
            <Link to={`/character/${characterData.id}`} className="char-card__thumbnail">
                <img
                    src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                    alt={characterData.name}
                />
            </Link>
            <div className="char-card__splitter"></div>
            <div className="char-card__name corner-triangle">
                <div className="char-card__name__text">{characterData.name}</div>
                <FavoriteButton characterData={characterData} boldIcon={true} />
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
