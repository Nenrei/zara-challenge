import React, { useEffect, useState } from 'react';
import styles from './CharacterDetailView.modules.css';
import { useParams } from 'react-router';
import FavoriteButton from '../../components/favoriteButton/FavoriteButton';
import { getMarvelCharacter, getMarvelCharacterComics } from '../../services/marvelServices';
import CharacterComic from '../../components/characterComic/CharacterComic';
import Error from '../../components/error/Error';

const CharacterDetailView = () => {
    let { characterId } = useParams();

    const [characterData, setCharacterData] = useState(null);
    const [characterComics, setCharacterComics] = useState([]);

    const [detailError, setDetailError] = useState(null);
    const [comicsError, setComicsError] = useState(null);

    useEffect(() => {
        getCharacterData();
        getComicsData();
    }, []);

    const getCharacterData = () => {
        setDetailError(null);
        getMarvelCharacter(characterId)
            .then((result) => {
                setCharacterData(result[0]);
            })
            .catch(() => {
                setDetailError({
                    text: "Error loading character's detail.",
                    function: getCharacterData,
                });
            });
    };

    const getComicsData = () => {
        setComicsError(null);
        getMarvelCharacterComics(characterId)
            .then((result) => {
                setCharacterComics(result);
            })
            .catch(() => {
                setComicsError({
                    text: "Error loading character's comics.",
                    function: getComicsData,
                });
            });
    };

    return (
        <section className={styles['character-detail-view']}>
            <div className={styles['character-detail-view__header corner-triangle']}>
                <div className={styles['character-detail-view__character']}>
                    <div className={styles['character-detail-view__character__thumbnail']}>
                        {characterData && (
                            <img
                                src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                                alt={characterData.name}
                            />
                        )}
                    </div>
                    <div className={styles['character-detail-view__character__resume']}>
                        {characterData && (
                            <>
                                <div
                                    className={
                                        styles['character-detail-view__character__resume__name']
                                    }
                                >
                                    <div
                                        className={
                                            styles[
                                                'character-detail-view__character__resume__name__text'
                                            ]
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
                                        styles[
                                            'character-detail-view__character__resume__description'
                                        ]
                                    }
                                >
                                    {characterData.description}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {detailError && (
                <Error
                    errorText={detailError.text}
                    onErrorButtonClick={() => {
                        detailError.function();
                    }}
                />
            )}

            <div className={styles['character-detail-view__comics']}>
                <div className={styles['character-detail-view__comics__title']}>Comics</div>

                <div className={styles['character-detail-view__comics__list']}>
                    {characterComics?.map((el) => (
                        <CharacterComic key={el.id} comicData={el} />
                    ))}
                </div>
            </div>

            {comicsError && (
                <Error
                    errorText={comicsError.text}
                    onErrorButtonClick={() => {
                        comicsError.function();
                    }}
                />
            )}
        </section>
    );
};

export default CharacterDetailView;
