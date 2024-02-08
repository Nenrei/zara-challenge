import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarvelContextProvider } from '../../context/marvelContext';
import CharacterCard from './CharacterCard';
import { BrowserRouter } from 'react-router-dom';
import { milesMorales } from '../../../__mocks__/testData';
import iconStyles from './../icon/icons.modules.css';

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

    expect(container.querySelector(`.${iconStyles['icon--heart']}`)).not.toBeInTheDocument();
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

    expect(container.querySelector(`.${iconStyles['icon--heart']}`)).toBeInTheDocument();
});
