import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const LivroDados = () => {
  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditora();
  const opcoes = controleEditora.getEditoras().map((editora) => {
    return {
      value: editora.codEditora,
      text: editora.nome,
    };
  });

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();
    controleLivros
      .incluir({
        codigo: '',
        titulo: titulo,
        resumo: resumo,
        autores: autores.split('\n'),
        codEditora: codEditora,
      })
      .then(() => {
        navigate('/raiz');
      });
  };

  return (
    <main>
      <div>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="form-group">
            <label>Título</label>
            <input type="text" className="form-control" value={titulo} onChange={(evento) => setTitulo(evento.target.value)}></input>
            <label>Resumo</label>
            <textarea type="text" className="form-control" value={resumo} onChange={(evento) => setResumo(evento.target.value)}></textarea>
            <label>Editora</label>
            <select className="form-select" value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
            <label>Autores (1 por linha)</label>
            <textarea type="text" className="form-control" value={autores} onChange={(evento) => setAutores(evento.target.value)}></textarea>
            <button type="submit" className="btn btn-primary d-block mt-3">
              Salvar Dados
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LivroDados;
