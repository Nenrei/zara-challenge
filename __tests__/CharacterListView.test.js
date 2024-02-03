import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../src/context/marvelContext';
import { BrowserRouter } from 'react-router-dom';
import CharacterListView from '../src/views/characterListView/CharacterListView';

import { getMarvelCharacters } from '../src/services/marvelServices';
import { characterList } from '../src/utils/testData';

jest.mock('../src/services/marvelServices');
describe('Characters test suite', () => {
    test('Renders the component with no characters', async () => {
        getMarvelCharacters.mockReturnValue(Promise.resolve([]));
        render(
            <MarvelContextProvider>
                <BrowserRouter>
                    <CharacterListView />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('0 results');
        expect(results).toBeInTheDocument();
    });

    test('Renders the component with characters', async () => {
        getMarvelCharacters.mockReturnValue(Promise.resolve(characterList));
        render(
            <MarvelContextProvider>
                <BrowserRouter>
                    <CharacterListView />
                </BrowserRouter>
            </MarvelContextProvider>,
        );

        const results = await screen.findByText('2 results');
        expect(results).toBeInTheDocument();

        const characterItems = await screen.findAllByRole('card');
        expect(characterItems).toHaveLength(2);
    });
});
