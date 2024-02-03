import React, { useEffect, useState } from 'react';
import './CharacterDetailView.css';
import { useParams } from 'react-router';
import FavoriteButton from '../../components/favoriteButton/FavoriteButton';
import { getMarvelCharacter, getMarvelCharacterComics } from '../../services/marvelServices';
import CharacterComic from '../../components/characterComic/CharacterComic';
import Error from '../../components/error/Error';

const CharacterDetailView = () => {
    useEffect(() => {}, []);

    let { characterId } = useParams();

    const [characterData, setCharacterData] = useState(null);
    const [characterComics, setCharacterComics] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        getCharacterData();
        getComicsData();
    }, []);

    const getCharacterData = () => {
        getMarvelCharacter(characterId)
            .then((result) => {
                setCharacterData(result[0]);
            })
            .catch(() => {
                setError(CHAR_ERROR);
            });
    };

    const getComicsData = () => {
        getMarvelCharacterComics(characterId)
            .then((result) => {
                setCharacterComics(result);
            })
            .catch(() => {
                setError(COMIC_ERROR);
            });
    };

    const CHAR_ERROR = { text: "Error loading character's detail.", function: getCharacterData };
    const COMIC_ERROR = { text: "Error loading character's comics.", function: getComicsData };

    return (
        <section className="character-detail-view">
            <div className="character-detail-view__header corner-triangle">
                <div className="character-detail-view__character">
                    <div className="character-detail-view__character__thumbnail">
                        {characterData && (
                            <img
                                src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                                alt={characterData.name}
                            />
                        )}
                    </div>
                    <div className="character-detail-view__character__resume">
                        {characterData && (
                            <>
                                <div className="character-detail-view__character__resume__name">
                                    <div className="character-detail-view__character__resume__name__text">
                                        {characterData.name}
                                    </div>
                                    <FavoriteButton
                                        characterData={characterData}
                                        boldIcon={false}
                                    />
                                </div>
                                <div className="character-detail-view__character__resume__description">
                                    {characterData.description}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="character-detail-view__comics">
                <div className="character-detail-view__comics__title">Comics</div>

                <div className="character-detail-view__comics__list">
                    {characterComics?.map((el) => (
                        <CharacterComic key={el.id} comicData={el} />
                    ))}
                </div>
            </div>

            {error && (
                <Error
                    errorText={error.text}
                    onErrorButtonClick={() => {
                        debugger;
                        error.function();
                    }}
                />
            )}
        </section>
    );
};

export default CharacterDetailView;
