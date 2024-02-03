import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/header/Header';
import CharacterListView from '../views/characterListView/CharacterListView';
import CharacterDetailView from '../views/characterDetail/CharacterDetailView';

import './marvelRouter.css';

const MarvelRouter = () => {
    return (
        <BrowserRouter basename={'/'}>
            <div className="grid-container">
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
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default MarvelRouter;
