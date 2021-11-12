import React, { useState } from "react";
import ModalAdd from "./ModalAdd";

const Navbar = ({ setGames, games, resetGames }) => {
  const [inputValue, setInputValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  const onChangeInputValue = (event) => {
    let input = event.target.value;
    setInputValue(input);
    const search = games.filter((game) => {
      return (
        game.Titulo.toLowerCase().startsWith(input) ||
        game.Produtora.toLowerCase().startsWith(input)
      );
    });
    setGames(search);
  };

  const handleClearInput = () => {
    resetGames()
    setInputValue('')
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
       
          <img
            src="https://i.pinimg.com/originals/54/9f/c7/549fc74ebda96dec8438be89bae768dc.gif"
            alt="Gif: groot dando oi"
            style={{
              width: "50px",
              borderRadius: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <h2 style={{color: 'white', marginTop: '10px'}}>Catálogo de Games</h2>
        <input
          type="text"
          onChange={onChangeInputValue}
          value={inputValue}
          placeholder="Titulos, Produtora..."
          style={{
            marginLeft: "17%",
            width: "300px",
            height: "35px",
            padding: "10px",
            fontFamily: "arial",
          }}
        />
        <button
          className="btn btn-warning"
          style={{
            fontFamily: "arial",
            height: "34px",
            marginLeft: "10px",
            padding: "5px",
          }}
          onClick={handleClearInput}
        >
          Limpar
        </button>
        <button
          className="btn btn-success"
          style={{
            fontFamily: "arial",
            height: "34px",
            marginLeft: "10px",
            padding: "5px",
          }}
          onClick={() => setModalIsOpen(true)}
        >
          Adicionar
        </button>
      </nav>
      <ModalAdd isOpen={modalIsOpen} close={handleCloseModal} resetPage={resetGames}/>
    </>
  );
};

export default Navbar;
