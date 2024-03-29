import React from 'react';
import styles from './marvelRouter.modules.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import CharacterListView from '../views/characterListView/CharacterListView';
import CharacterDetailView from '../views/characterDetail/CharacterDetailView';

const MarvelRouter = () => {
    return (
        <BrowserRouter basename={'/'}>
            <div className={styles['grid-container']}>
                <Header />
                <main className="main">
                    <Routes>
                        <Route
                            path="/"
                            element={<CharacterListView renderFavoriteList={false} />}
                        />
                        <Route path="/character/:characterId" element={<CharacterDetailView />} />
                        <Route
                            path="/favorites"
                            element={<CharacterListView renderFavoriteList={true} />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default MarvelRouter;
