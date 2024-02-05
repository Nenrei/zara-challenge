import React, { useEffect, useState } from 'react';
import { useMarvelContext } from '../../context/marvelContext';
import { getMarvelCharacters } from '../../services/marvelServices';
import CharacterCard from '../../components/characterCard/CharacterCard';
import SearchBar from '../../components/searchBar/SearchBar';
import PropTypes from 'prop-types';
import Error from '../../components/error/Error';
import './CharacterListView.css';

const CharacterListView = ({ renderFavoriteList }) => {
    const {
        states: {
            favorite: { favoriteCharacters },
        },
    } = useMarvelContext();

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(null);
        if (renderFavoriteList) {
            setCharacters(favoriteCharacters);
        } else {
            searchCharacters(null);
        }
    }, [renderFavoriteList]);

    useEffect(() => {
        if (renderFavoriteList) {
            setCharacters(favoriteCharacters);
        }
    }, [favoriteCharacters]);

    const searchCharacters = (name) => {
        setError(null);
        if (renderFavoriteList) {
            setCharacters(
                favoriteCharacters.filter((el) =>
                    el.name.toLowerCase().startsWith(name.toLowerCase()),
                ),
            );
            setLoading(false);
        } else {
            setCharacters([]);
            setLoading(true);

            getMarvelCharacters(name ? name.trim() : '')
                .then((result) => {
                    setCharacters(result);
                    setLoading(false);
                })
                .catch(() => {
                    setCharacters([]);
                    setLoading(false);
                    setError(true);
                });
        }
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
                {characters?.map((el) => (
                    <CharacterCard key={el.id} characterData={el} />
                ))}
            </div>

            {error && (
                <Error
                    errorText={'Error loading characters.'}
                    onErrorButtonClick={() => {
                        searchCharacters(null);
                    }}
                />
            )}
        </section>
    );
};

CharacterListView.propTypes = {
    renderFavoriteList: PropTypes.bool.isRequired,
};

export default CharacterListView;
