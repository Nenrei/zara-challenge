import React, { useEffect, useState } from 'react';
import { getMarvelCharacters } from '../../services/marvelServices';
import CharacterCard from '../../components/characterCard/CharacterCard';
import './CharacterListView.css';
import SearchBar from '../../components/searchBar/SearchBar';

const CharacterListView = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        searchCharacters(null);
    }, []);

    const searchCharacters = (name) => {
        setCharacters([]);
        setLoading(true);
        getMarvelCharacters(name ? name.trim() : '')
            .then((result) => {
                setCharacters(result);
                setLoading(false);
            })
            .catch((error) => {
                setCharacters([]);
                setLoading(false);
                console.log(error);
            });
    };

    return (
        <section className="character-list-view">
            <SearchBar
                searchResultCount={characters?.length || 0}
                onEnterPress={(value) => {
                    searchCharacters(value);
                }}
                isLoading={loading}
            />

            <div className="character-list-view__list">
                {characters &&
                    characters.map((el) => <CharacterCard key={el.id} characterData={el} />)}
            </div>
        </section>
    );
};

export default CharacterListView;
