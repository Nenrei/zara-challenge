import React from 'react';
import { useMarvelContext } from '../../context/marvelContext';
import './header.css';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router';

const Header = () => {
    const {
        states: {
            favorite: { favoriteCharacters },
        },
    } = useMarvelContext();

    const navigate = useNavigate();

    const handleFavClick = () => {
        navigate('/favorites');
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <header className="header">
            <div className={'header__logo'} onClick={handleHomeClick}>
                <img src={logo} alt={'logo'} />
            </div>
            <div className={'header__fav-count'} onClick={handleFavClick}>
                <div className={'icon icon--heart header__fav-count__icon'}></div>
                <div className={'header__fav-count__text'}>{favoriteCharacters.length}</div>
            </div>
        </header>
    );
};

export default Header;
