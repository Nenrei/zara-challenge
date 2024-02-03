import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../src/context/marvelContext';
import { BrowserRouter } from 'react-router-dom';
import { characterList } from '../src/utils/testData';
import FavoriteCharacterListView from '../src/views/characterListView/FavoriteCharacterListView';

describe('Favorite characters test suite', () => {
    test('Renders the component with no favorite characters', async () => {
        render(
            <MarvelContextProvider>
                <BrowserRouter>
                    <FavoriteCharacterListView />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('0 results');
        expect(results).toBeInTheDocument();
    });

    test('Renders the component with favorite characters', async () => {
        render(
            <MarvelContextProvider
                defaultValue={{
                    states: {
                        favorite: {
                            favoriteCharacters: characterList,
                        },
                    },
                }}
            >
                <BrowserRouter>
                    <FavoriteCharacterListView />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('2 results');
        expect(results).toBeInTheDocument();

        const characterItems = await screen.findAllByRole('card');
        expect(characterItems).toHaveLength(2);
    });
});
