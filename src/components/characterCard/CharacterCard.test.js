import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { MarvelContextProvider } from '../../context/marvelContext';

it('No fav character card', () => {
    const component = renderer.create(
        <MarvelContextProvider>
            <BrowserRouter>
                <CharacterCard
                    characterData={{
                        id: 1009610,
                        name: 'Spider-Man (Peter Parker)',
                        description:
                            'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
                        thumbnail: {
                            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
                            extension: 'jpg',
                        },
                    }}
                ></CharacterCard>
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
it('Fav character card', () => {
    const component2 = renderer.create(
        <MarvelContextProvider
            defaultValue={{
                states: {
                    favorite: {
                        favoriteCharacters: [
                            {
                                id: 1009610,
                                name: 'Spider-Man (Peter Parker)',
                                description:
                                    'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
                                thumbnail: {
                                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
                                    extension: 'jpg',
                                },
                            },
                        ],
                    },
                },
            }}
        >
            <BrowserRouter>
                <CharacterCard
                    characterData={{
                        id: 1009610,
                        name: 'Spider-Man (Peter Parker)',
                        description:
                            'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
                        thumbnail: {
                            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
                            extension: 'jpg',
                        },
                    }}
                ></CharacterCard>
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    let tree2 = component2.toJSON();
    expect(tree2).toMatchSnapshot();
});
