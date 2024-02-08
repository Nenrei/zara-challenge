import React from 'react';
import styles from './header.modules.css';
import { Link } from 'react-router-dom';
import { useMarvelContext } from '../../context/marvelContext';
import logo from '../../../public/assets/images/logo.png';
import Icon, { ICON_TYPES } from '../icon/Icon';

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
                <div className={styles['header__fav-count__icon']}>
                    <Icon type={ICON_TYPES.HEART} />
                </div>
                <div className={styles['header__fav-count__text']}>{favoriteCharacters.length}</div>
            </Link>
        </header>
    );
};

export default Header;
