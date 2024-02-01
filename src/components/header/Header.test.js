import renderer from 'react-test-renderer';
import Header from './Header';
import { MarvelContextProvider } from '../../context/marvelContext';
import { BrowserRouter } from 'react-router-dom';

it('test de header', () => {
    const component = renderer.create(
        <MarvelContextProvider
            defaultValue={{
                states: {
                    favorite: {
                        favoriteCharacters: [],
                    },
                },
            }}
        >
            <BrowserRouter>
                <Header></Header>
            </BrowserRouter>
        </MarvelContextProvider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
