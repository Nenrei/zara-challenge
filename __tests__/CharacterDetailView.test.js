import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../src/context/marvelContext';

import { getMarvelCharacter, getMarvelCharacterComics } from '../src/services/marvelServices';
import CharacterDetailView from '../src/views/characterDetail/CharacterDetailView';
import { comicsMiles, milesMorales } from '../src/utils/testData';

jest.mock('../src/services/marvelServices');

test('Renders the character detail component', async () => {
    getMarvelCharacter.mockReturnValue(Promise.resolve([milesMorales]));

    getMarvelCharacterComics.mockReturnValue(Promise.resolve(comicsMiles));

    render(
        <MarvelContextProvider>
            <CharacterDetailView />
        </MarvelContextProvider>,
    );

    const results = await screen.findByText(milesMorales.name);
    expect(results).toBeInTheDocument();

    const comics = await screen.findAllByRole('comic');
    expect(comics).toHaveLength(2);
});
