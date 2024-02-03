import React, { useState } from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

const SearchBar = ({ searchResultCount, onEnterPress, isLoading }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="search-bar">
            <div className="search-bar__input-container">
                <div className="icon icon--search"></div>
                <input
                    type="text"
                    className="search-bar__input-container__input"
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
            <div className="search-bar__result-count">
                {isLoading ? 'Loading...' : `${searchResultCount} results`}
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    searchResultCount: PropTypes.number.isRequired,
    onEnterPress: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
