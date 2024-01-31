import React, { useEffect, useState } from 'react';
import './CharacterDetailView.css';
import { useParams } from 'react-router';
import { useMarvelContext } from '../../context/marvelContext';
import CharacterCard from '../../components/characterCard/CharacterCard';

const CharacterDetailView = () => {
    useEffect(() => {}, []);

    let { characterId } = useParams();

    const {
        actions: { getCharacter },
    } = useMarvelContext();

    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
        setCharacterData(getCharacter(parseInt(characterId)));
    }, []);

    return (
        <section className="character-detail-view">
            {characterData && (
                <>
                    <div className="character-detail-view__character">
                        <div className={'character-detail-view__character__thumbnail'}>
                            <img
                                src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                                alt={characterData.name}
                            />
                        </div>
                    </div>
                    <div className="character-detail-view__comics"></div>
                </>
            )}
        </section>
    );
};

export default CharacterDetailView;
