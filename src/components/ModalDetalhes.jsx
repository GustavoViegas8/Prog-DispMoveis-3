import Modal from "react-modal";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalDetalhes = ({ dados, close, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={customStyles}
      ariaHideApp={false}
    >
      <h2 className="text-center">{dados.Titulo}</h2>
      <hr />
      <table class="table table-hover">
        <tbody>
          <tr class="table-active">
            <th scope="row">Produtora:</th>
            <td>{dados.Produtora}</td>
          </tr>
          <tr>
            <th scope="row">Lançamento:</th>
            <td>{dados.Lancamento}</td>
          </tr>
          <tr class="table-active">
            <th scope="row">Plataforma:</th>
            <td>{dados.Plataforma}</td>
          </tr>
          <tr>
            <th scope="row">Preço:</th>
            <td>{Number(dados.Preco) !== 0? Number(dados.Preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 'Grátis'}</td>
          </tr>
          <tr class="table-active">
            <th scope="row">Gênero:</th>
            <td>{dados.Genero}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <button
        onClick={close}
        className="btn-close"
        style={{ marginLeft: "45%" }}
      />
    </Modal>
  );
};

export default ModalDetalhes;
