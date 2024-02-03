import { renderHook } from '@testing-library/react';
import { MarvelContextProvider } from '../src/context/marvelContext';
import useFavorite from '../src/hooks/useFavorite';
import { thor } from '../src/utils/testData';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

describe('useFavorite', () => {
    it('should handle favorite state correctly', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const wrapper = ({ children }) => <MarvelContextProvider>{children}</MarvelContextProvider>;

        const { result } = renderHook(() => useFavorite(thor), { wrapper });

        expect(result.current.isFavoriteCharacter()).toBe(false);

        act(() => {
            result.current.toggleFavorite();
        });

        expect(result.current.isFavoriteCharacter()).toBe(true);

        act(() => {
            result.current.toggleFavorite({ stopPropagation: jest.fn() });
        });

        expect(result.current.isFavoriteCharacter()).toBe(false);
    });
});
