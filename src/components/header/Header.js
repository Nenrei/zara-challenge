import React from "react";
import { useMarvelContext } from "../../context/marvelContext";
import "./header.css";
import logo from "../../assets/images/logo.png";

const CharacterListView = () => {
    const {
        states: {
            favorite: { favoriteCharacters },
        },
    } = useMarvelContext();

    return (
        <header className="header">
            <div className={"header__logo"}>
                <img src={logo} alt={"logo"} />
            </div>
            <div className={"header__fav-count"}>
                <div className={"icon icon--heart header__fav-count__icon"}></div>
                <div className={"header__fav-count__text"}>{favoriteCharacters.length}</div>
            </div>
        </header>
    );
};

export default CharacterListView;
