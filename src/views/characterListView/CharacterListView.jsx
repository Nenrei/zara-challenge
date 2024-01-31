import React, { useEffect, useState } from 'react';
import { test } from '../../services/marvelServices';
import CharacterCard from '../../components/characterCard/CharacterCard';
import './CharacterListView.css';
import { useMarvelContext } from '../../context/marvelContext';

const CharacterListView = () => {
    const {
        states: {
            storage: { characters, setCharacters },
        },
    } = useMarvelContext();

    useEffect(() => {
        test()
            .then((result) => {
                setCharacters(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className={'character-list-view'}>
            {characters.map((el) => (
                <CharacterCard key={el.id} characterData={el} />
            ))}
        </section>
    );
};

export default CharacterListView;
