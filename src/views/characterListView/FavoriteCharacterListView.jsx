import React, { useEffect, useState } from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import './CharacterListView.css';
import { useMarvelContext } from '../../context/marvelContext';
import SearchBar from '../../components/searchBar/SearchBar';

const FavoriteCharacterListView = () => {
    const {
        states: {
            favorite: { favoriteCharacters },
        },
    } = useMarvelContext();

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setCharacters(favoriteCharacters);
    }, []);

    const searchCharacters = (name) => {
        setCharacters(
            favoriteCharacters.filter((el) => el.name.toLowerCase().startsWith(name.toLowerCase())),
        );
    };

    return (
        <section className="character-list-view">
            <SearchBar
                searchResultCount={favoriteCharacters.length}
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

export default FavoriteCharacterListView;
