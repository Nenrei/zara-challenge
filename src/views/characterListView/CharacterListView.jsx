import React, { useEffect, useState } from 'react';
import { getMarvelCharacters } from '../../services/marvelServices';
import CharacterCard from '../../components/characterCard/CharacterCard';
import './CharacterListView.css';
import { useMarvelContext } from '../../context/marvelContext';
import SearchBar from '../../components/searchBar/SearchBar';

const CharacterListView = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        searchCharacters(null);
    }, []);

    const searchCharacters = (name) => {
        getMarvelCharacters(name)
            .then((result) => {
                setCharacters(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section className="character-list-view">
            <SearchBar
                searchResultCount={characters.length}
                onEnterPress={(value) => {
                    console.log(value);
                    searchCharacters(value);
                }}
            />

            <div className="character-list-view__list">
                {characters.map((el) => (
                    <CharacterCard key={el.id} characterData={el} />
                ))}
            </div>
        </section>
    );
};

export default CharacterListView;
