import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/header/Header';
import { MarvelContextProvider } from '../src/context/marvelContext';
import { BrowserRouter } from 'react-router-dom';

test('testing header component', () => {
    const { container } = render(
        <MarvelContextProvider
            defaultValue={{
                states: {
                    favorite: {
                        favoriteCharacters: [
                            {
                                id: 1016181,
                                name: 'Spider-Man (Miles Morales)',
                                description:
                                    'Teenager Miles Morales grew up in Brooklyn, New York. Recently, Miles took on the controversial and pressured role of Spider-Man shortly after the death of the original. Morales made his debut against The Kangaroo, much to the surprise and disapproval of many present at the confrontation.',
                                thumbnail: {
                                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/537bcfa1eed73',
                                    extension: 'jpg',
                                },
                            },
                        ],
                    },
                },
            }}
        >
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    const header = screen.getByAltText('logo');
    expect(header).toBeInTheDocument();

    const favCharacters = container.querySelector('.header__fav-count__text').innerHTML;
    expect(favCharacters === '1').toBe(true);
});
