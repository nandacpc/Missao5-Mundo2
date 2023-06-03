import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    if (!carregado) {
      controleLivro.obterLivros().then((livrosObtidos) => {
        setLivros(livrosObtidos);
        setCarregado(true);
      });
    }
  }, [carregado, controleLivro]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo).then(() => {
      setCarregado(false);
    });
  };

  const LinhaLivro = (props) => {
    let { livro } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
      <tr>
        <td>
          {livro.titulo}
          <button className="btn btn-danger d-block btn-sm" onClick={() => excluir(livro.codigo)}>
            Excluir
          </button>
        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <div>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro key={livro.codigo} livro={livro} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LivroLista;