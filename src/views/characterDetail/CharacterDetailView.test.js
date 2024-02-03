import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../../context/marvelContext';

import { getMarvelCharacter, getMarvelCharacterComics } from '../../services/marvelServices';
import CharacterDetailView from './CharacterDetailView';
import { comicsMiles, milesMorales } from '../../utils/testData';

jest.mock('../../services/marvelServices');

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
