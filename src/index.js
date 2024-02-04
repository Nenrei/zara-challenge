import React from 'react';
import { createRoot } from 'react-dom/client';
import { MarvelContextProvider } from './context/marvelContext';
import MarvelRouter from './routers/marvelRouter';

import './styles/variables.css';
import './styles/reset.css';
import './styles/icons.css';
import './styles/common.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <MarvelContextProvider>
        <MarvelRouter />
    </MarvelContextProvider>,
);
