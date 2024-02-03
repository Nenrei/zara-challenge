import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MarvelContextProvider } from '../../context/marvelContext';
import { BrowserRouter } from 'react-router-dom';
import { characterList } from '../../utils/testData';

test('testing header component', () => {
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
                <Header />
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    const header = screen.getByAltText('logo');
    expect(header).toBeInTheDocument();

    const favCharacters = container.querySelector('.header__fav-count__text').innerHTML;
    expect(favCharacters === '2').toBe(true);
});
