import React, { useState } from "react";
import ModalDetalhes from "./ModalDetalhes";
import { db } from "../server/conectadb"
import { deleteDoc, doc } from "@firebase/firestore/lite";

const ItemLista = ({ game, resetGames }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }
  const handleOnDelete = async (id) => {
    await deleteDoc(doc(db, 'Filmes_DB', id))
    await resetGames()
  }

  return (
    <>
      <div className="card text-center border-primary" style={{ width: '310px', height: '310px', margin: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
        <img src={game.Imagem} alt="Capa do Game" style={{height: "60%"}} />
        <div className="card-body" >
          <h5 className="card-title">{game.Titulo}</h5>
          <hr />
          <button className="btn btn-block btn-info" style={{padding: '10px', marginRight: '10px'}} onClick={()=> setModalIsOpen(true)}>Detalhes</button>
          <button className="btn btn-block btn-danger" style={{padding: '10px'}} onClick={() => handleOnDelete(game.id)}>Deletar</button>
        </div>
      </div>
      <ModalDetalhes dados={game} isOpen={modalIsOpen} close={handleCloseModal} />
    </>
  );
};

export default ItemLista;
