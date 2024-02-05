import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../../context/marvelContext';

import { getMarvelCharacter, getMarvelCharacterComics } from '../../services/marvelServices';
import CharacterDetailView from './CharacterDetailView';
import { comicsMiles, milesMorales } from '../../../__mocks__/testData';

jest.mock('../../services/marvelServices');

test('Renders the character detail component', async () => {
    getMarvelCharacter.mockReturnValue(Promise.resolve([milesMorales]));

    getMarvelCharacterComics.mockReturnValue(Promise.resolve(comicsMiles));

    const { container } = render(
        <MarvelContextProvider>
            <CharacterDetailView />
        </MarvelContextProvider>,
    );

    const results = await screen.findByText(milesMorales.name);
    expect(results).toBeInTheDocument();

    const comicItems = container.querySelectorAll('.comic');
    expect(comicItems).toHaveLength(2);
});
