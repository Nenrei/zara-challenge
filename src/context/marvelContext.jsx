import React, { createContext, useState } from 'react';

const MarvelContext = createContext({});

const MarvelContextProvider = ({ defaultValue, children }) => {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);

    const isFavoriteCharacter = (id) => {
        return favoriteCharacters.find((el) => el.id === id) != null;
    };

    let value = {
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

    if (defaultValue) {
        value = { ...value, ...defaultValue };
    }

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
