import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterListView from '../views/characterListView/CharacterListView';
import './marvelRouter.css';
import Header from '../components/header/Header';

const MarvelRouter = () => {
    return (
        <BrowserRouter basename={'/'}>
            <div className="grid-container">
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<CharacterListView />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default MarvelRouter;
