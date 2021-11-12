import Modal from "react-modal";
import { customStyles } from "./ModalDetalhes";
import { db } from "../server/conectadb"
import { addDoc, collection } from "@firebase/firestore/lite";

const ModalAdd = ({ close, isOpen, resetPage }) => {
    const handleRegistration = async () => {
        const titulo = document.getElementById('titulo').value
        const genero = document.getElementById('genero').value
        const lancamento = document.getElementById('lancamento').value
        const plataforma = document.getElementById('plataforma').value
        const imagem = document.getElementById('imagem').value
        const preco = document.getElementById('preco').value
        const produtora = document.getElementById('produtora').value
        const data = {
            Titulo: titulo,
            Genero: genero,
            Lancamento: Number(lancamento),
            Plataforma: plataforma,
            Imagem: imagem,
            Preco: Number(preco),
            Produtora: produtora
        }
        await addDoc(collection(db, "Filmes_DB"), data)
        resetPage()
    }

  return (
    <Modal isOpen={isOpen} onRequestClose={close} style={customStyles} ariaHideApp={false}>
      <div className="form-group text-center" style={{ width: "450px" }}>
        <button
          onClick={close}
          className="btn-close"
          style={{ marginLeft: "90%" }}
        />
        <h2>Cadastro de Games</h2>
        <hr />
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="titulo" placeholder="Titulo" />
          <label>Título:</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="genero" placeholder="Gênero" />
          <label>Gênero:</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="lancamento" placeholder="Lançamento" />
          <label>Lançamento:</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="plataforma" placeholder="Plataforma" />
          <label>Plataforma:</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="imagem" placeholder="Imagem" />
          <label>Imagem:</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="preco" placeholder="Preço" />
          <label>Preço:</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="produtora" placeholder="Produtora" />
          <label>Produtora:</label>
        </div>
        <hr />
        <button onClick={() => handleRegistration()} className="btn btn-success">
          Cadastrar
        </button>
      </div>
    </Modal>
  );
};

export default ModalAdd;
