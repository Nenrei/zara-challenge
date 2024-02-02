import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../src/context/marvelContext';
import CharacterCard from '../src/components/characterCard/CharacterCard';
import { BrowserRouter } from 'react-router-dom';

const milesMorales = {
    id: 1016181,
    name: 'Spider-Man (Miles Morales)',
    description:
        'Teenager Miles Morales grew up in Brooklyn, New York. Recently, Miles took on the controversial and pressured role of Spider-Man shortly after the death of the original. Morales made his debut against The Kangaroo, much to the surprise and disapproval of many present at the confrontation.',
    thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/537bcfa1eed73',
        extension: 'jpg',
    },
};

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

    const nameContainer = container.querySelector('.char-card__name__fav');
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
                actions: {
                    isFavoriteCharacter: () => {
                        return true;
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

    const nameContainer = container.querySelector('.char-card__name__fav');
    expect(nameContainer).toHaveClass('icon--heart');
});
