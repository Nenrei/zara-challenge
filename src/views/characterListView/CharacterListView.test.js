import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../../context/marvelContext';
import { BrowserRouter } from 'react-router-dom';
import CharacterListView from './CharacterListView';

import { getMarvelCharacters } from '../../services/marvelServices';
import { characterList } from '../../../__mocks__/testData';

jest.mock('../../services/marvelServices');

describe('Characters test suite', () => {
    test('Renders the component with no characters', async () => {
        getMarvelCharacters.mockReturnValue(Promise.resolve([]));
        render(
            <MarvelContextProvider>
                <BrowserRouter>
                    <CharacterListView renderFavoriteList={false} />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('0 results');
        expect(results).toBeInTheDocument();
    });

    test('Renders the component with characters', async () => {
        getMarvelCharacters.mockReturnValue(Promise.resolve(characterList));
        const { container } = render(
            <MarvelContextProvider>
                <BrowserRouter>
                    <CharacterListView renderFavoriteList={false} />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('2 results');
        expect(results).toBeInTheDocument();

        const characterItems = container.querySelectorAll('.character-card');
        expect(characterItems).toHaveLength(2);
    });

    test('Renders the component with no favorite characters', async () => {
        render(
            <MarvelContextProvider>
                <BrowserRouter>
                    <CharacterListView renderFavoriteList={true} />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('0 results');
        expect(results).toBeInTheDocument();
    });

    test('Renders the component with favorite characters', async () => {
        const { container } = render(
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
                    <CharacterListView renderFavoriteList={true} />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('2 results');
        expect(results).toBeInTheDocument();

        const characterItems = container.querySelectorAll('.character-card');
        expect(characterItems).toHaveLength(2);
    });
});
