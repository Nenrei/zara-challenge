import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../src/context/marvelContext';
import { BrowserRouter } from 'react-router-dom';
import { comicsMiles } from '../src/utils/testData';
import CharacterComic from '../src/components/characterComic/CharacterComic';

test('testing character comic', () => {
    render(
        <MarvelContextProvider>
            <BrowserRouter>
                <CharacterComic comicData={comicsMiles[0]} />
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    const name = screen.getByText(comicsMiles[0].title);
    expect(name).toBeInTheDocument();
});