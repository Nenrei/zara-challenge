import React from "react";
import { createRoot } from "react-dom/client";
import CharacterListView from "./views/characterListView/CharacterListView";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <CharacterListView />
    </React.StrictMode>,
);
