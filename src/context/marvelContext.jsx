import React, { createContext, useState } from 'react';

const MarvelContext = createContext({});

const MarvelContextProvider = ({ defaultValue, children }) => {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);

    const value = {
        states: {
            favorite: {
                favoriteCharacters:
                    defaultValue?.states?.favorite?.favoriteCharacters || favoriteCharacters,
                setFavoriteCharacters,
            },
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
