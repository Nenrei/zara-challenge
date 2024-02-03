import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../src/context/marvelContext';
import { BrowserRouter } from 'react-router-dom';
import CharacterListView from '../src/views/characterListView/CharacterListView';

import { getMarvelCharacters } from '../src/services/marvelServices';
import { characterList } from '../src/utils/testData';

jest.mock('../src/services/marvelServices');
describe('Cgaracters test suite', () => {
    test('Renders the component with characters', async () => {
        getMarvelCharacters.mockReturnValue(Promise.resolve(characterList));
        render(
            <MarvelContextProvider>
                <BrowserRouter>
                    <CharacterListView />
                </BrowserRouter>
            </MarvelContextProvider>,
        );
        const characterItems = await screen.findAllByRole('card');
        expect(characterItems).toHaveLength(2);
    });
});
