import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchResultCount, onEnterPress }) => {
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
            <div className="search-bar__result-count">{searchResultCount} results</div>
        </div>
    );
};

export default SearchBar;