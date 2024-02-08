import React, { useState } from 'react';
import styles from './SearchBar.modules.css';
import PropTypes from 'prop-types';
import Icon, { ICON_TYPES } from '../icon/Icon';

const SearchBar = ({ searchResultCount, onEnterPress, isLoading }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles['search-bar']}>
            <div className={styles['search-bar__input-container']}>
                <div className={styles['search-bar__input-icon']}>
                    <Icon type={ICON_TYPES.SEARCH} />
                </div>
                <input
                    type="text"
                    className={styles['search-bar__input-container__input']}
                    placeholder="Search a character..."
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onEnterPress(inputValue);
                        }
                    }}
                />
            </div>
            <div className={styles['search-bar__result-count']}>
                {isLoading ? 'Loading...' : `${searchResultCount} results`}
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    searchResultCount: PropTypes.number.isRequired,
    onEnterPress: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default SearchBar;
