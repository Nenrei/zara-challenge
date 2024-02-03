import React from 'react';
import './characterComic.css';
import PropTypes from 'prop-types';

const CharacterComic = ({ comicData }) => {
    const getDate = () => {
        const date = new Date(comicData.dates[0].date);
        if (isNaN(date)) {
            return '';
        }

        return date.getFullYear();
    };

    return (
        <div className="comic">
            <div className="comic__thumbnail">
                <img
                    src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                    alt={comicData.title}
                />
            </div>
            <div className="comic__title" title={comicData.title}>
                {comicData.title}
            </div>
            <div className="comic__date">{getDate()}</div>
        </div>
    );
};

CharacterComic.propTypes = {
    comicData: PropTypes.shape({
        thumbnail: PropTypes.shape({
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired,
        }),
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        dates: PropTypes.array,
    }).isRequired,
};

export default CharacterComic;
