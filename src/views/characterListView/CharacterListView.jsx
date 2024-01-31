import React, { useEffect, useState } from "react";
import { test } from "../../services/marvelServices";

const CharacterListView = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        test()
            .then((result) => {
                console.log(result);
                setCharacters(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section
            className={"character-list-view"}
            style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "10px" }}
        >
            {characters.map((el) => (
                <div
                    key={el.id}
                    style={{ width: "150px", height: "150px", border: "1px solid black" }}
                >
                    <div>{el.name}</div>
                    <div>
                        <img
                            style={{ width: "100px", height: "100px" }}
                            src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                            alt={el.name}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CharacterListView;
