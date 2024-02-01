import React, { useEffect, useState } from 'react';
import './CharacterDetailView.css';
import { useParams } from 'react-router';
import { useMarvelContext } from '../../context/marvelContext';
import FavoriteButton from '../../components/favoriteButton/FavoriteButton';
import { getMarvelCharacter, getMarvelCharacterComics } from '../../services/marvelServices';
import CharacterComic from '../../components/characterComic/CharacterComic';

const CharacterDetailView = () => {
    useEffect(() => {}, []);

    let { characterId } = useParams();

    const [characterData, setCharacterData] = useState(null);
    const [characterComics, setCharacterComics] = useState([]);

    useEffect(() => {
        getMarvelCharacter(characterId)
            .then((result) => {
                setCharacterData(result[0]);
            })
            .catch((error) => {
                console.log(error);
            });
        getMarvelCharacterComics(characterId)
            .then((result) => {
                console.log(result);
                setCharacterComics(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="character-detail-view">
            {characterData && (
                <>
                    <div className="character-detail-view__header corner-triangle">
                        <div className="character-detail-view__character">
                            <div className={'character-detail-view__character__thumbnail'}>
                                <img
                                    src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                                    alt={characterData.name}
                                />
                            </div>
                            <div className="character-detail-view__character__resume">
                                <div className={'character-detail-view__character__resume__name'}>
                                    <div
                                        className={
                                            'character-detail-view__character__resume__name__text'
                                        }
                                    >
                                        {characterData.name}
                                    </div>
                                    <FavoriteButton
                                        characterData={characterData}
                                        boldIcon={false}
                                    />
                                </div>
                                <div
                                    className={
                                        'character-detail-view__character__resume__description'
                                    }
                                >
                                    {characterData.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character-detail-view__comics">
                        <div className="character-detail-view__comics__title">Comics</div>
                        <div className="character-detail-view__comics__list">
                            {characterComics.map((el) => (
                                <CharacterComic key={el.id} comicData={el} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default CharacterDetailView;
