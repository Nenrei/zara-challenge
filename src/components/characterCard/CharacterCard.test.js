import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../../context/marvelContext';
import CharacterCard from './CharacterCard';
import { BrowserRouter } from 'react-router-dom';
import { milesMorales } from '../../utils/testData';

test('testing character card', () => {
    const { container } = render(
        <MarvelContextProvider>
            <BrowserRouter>
                <CharacterCard characterData={milesMorales} />
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    const name = screen.getByText(milesMorales.name);
    expect(name).toBeInTheDocument();

    const nameContainer = container.querySelector('.favorite-button');
    expect(nameContainer).not.toHaveClass('icon--heart');
});

test('testing character card marked as favorite', () => {
    const { container } = render(
        <MarvelContextProvider
            defaultValue={{
                states: {
                    favorite: {
                        favoriteCharacters: [milesMorales],
                    },
                },
            }}
        >
            <BrowserRouter>
                <CharacterCard characterData={milesMorales} />
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    const name = screen.getByText(milesMorales.name);
    expect(name).toBeInTheDocument();

    const nameContainer = container.querySelector('.favorite-button');
    expect(nameContainer).toHaveClass('icon--heart');
});
