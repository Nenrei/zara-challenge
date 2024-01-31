import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterListView from '../views/characterListView/CharacterListView';
import './marvelRouter.css';
import Header from '../components/header/Header';
import CharacterDetailView from '../views/characterDetail/CharacterDetailView';

const MarvelRouter = () => {
    return (
        <BrowserRouter basename={'/'}>
            <div className="grid-container">
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="*" element={<CharacterListView />} />
                        <Route path="/character/:characterId" element={<CharacterDetailView />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default MarvelRouter;
