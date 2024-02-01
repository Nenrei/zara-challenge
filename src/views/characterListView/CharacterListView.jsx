import React, { useEffect, useState } from 'react';
import { getMarvelCharacters } from '../../services/marvelServices';
import CharacterCard from '../../components/characterCard/CharacterCard';
import './CharacterListView.css';
import SearchBar from '../../components/searchBar/SearchBar';
import classNames from 'classnames';

const CharacterListView = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        searchCharacters(null);
    }, []);

    const searchCharacters = (name) => {
        setCharacters([]);
        getMarvelCharacters(name ? name.trim() : '')
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
