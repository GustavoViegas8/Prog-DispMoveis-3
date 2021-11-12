import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ItemLista from "./components/ItemLista";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./server/conectadb";

const App = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const gamesCol = collection(db, "Filmes_DB");
    const gamesSnapshot = await getDocs(gamesCol);

    const gamesList = gamesSnapshot?.docs?.map((doc) => {
      const dados = doc?.data();
      const id = doc?.id;
      return { id, ...dados };
    });
    setGames(gamesList);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <Navbar setGames={setGames} games={games} resetGames={getGames} />
      <div className="container mt-3">
        <div className="row">
          {games?.map((game) => (
            <ItemLista key={game.id} game={game} resetGames={getGames}/>
          ))}
          {games.length !== 0 ? null : (
            <div className="alert alert-dismissible alert-danger text-center">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <strong>Sem dados Encontrados!</strong>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
