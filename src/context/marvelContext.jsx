import React, { createContext, useState } from 'react';

const MarvelContext = createContext({});

const MarvelContextProvider = ({ children }) => {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);

    const isFavoriteCharacter = (id) => {
        return favoriteCharacters.find((el) => el.id === id) != null;
    };

    const value = {
        states: {
            favorite: {
                favoriteCharacters,
                setFavoriteCharacters,
            },
        },
        actions: {
            isFavoriteCharacter,
        },
    };

    return <MarvelContext.Provider value={value}>{children}</MarvelContext.Provider>;
};

const useMarvelContext = () => {
    const context = React.useContext(MarvelContext);
    if (context === undefined) {
        throw new Error('useMarvelContext must be used within a MarvelContextProvider');
    }
    return context;
};

export { MarvelContextProvider, useMarvelContext };
