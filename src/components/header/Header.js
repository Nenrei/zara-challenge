import React from 'react';
import { Link } from 'react-router-dom';
import { useMarvelContext } from '../../context/marvelContext';
import logo from '../../../public/assets/images/logo.png';
import styles from './header.modules.css';

const Header = () => {
    const {
        states: {
            favorite: { favoriteCharacters },
        },
    } = useMarvelContext();

    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.header__logo}>
                <img src={logo} alt="logo" />
            </Link>
            <Link to={'/favorites'} className={styles['header__fav-count']}>
                <div className={`icon icon--heart ${styles['header__fav-count__icon']}`}></div>
                <div className={styles['header__fav-count__text']}>{favoriteCharacters.length}</div>
            </Link>
        </header>
    );
};

export default Header;
