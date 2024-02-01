import React from 'react';
import './characterComic.css';

const CharacterComic = ({ comicData }) => {
    return (
        <div className="comic">
            <div className="comic__thumbnail">
                <img
                    src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                    alt={comicData.name}
                />
            </div>
            <div className="comic__title">{comicData.title}</div>
            <div className="comic__date">{new Date(comicData.dates[0].date).getFullYear()}</div>
        </div>
    );
};

export default CharacterComic;
