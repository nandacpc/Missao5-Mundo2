const Livro = require('../modelo/livro-schema');

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    console.error('Erro ao obter livros:', error);
    throw error;
  }
};

const incluir = async (livro) => {
    const novoLivro = await Livro.create(livro);
    return novoLivro; 
};

const excluir = async (codigo) => {
  try {
    const result = await Livro.deleteOne({ _id: codigo });
    return result;
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    throw error;
  }
};

module.exports = { obterLivros, incluir, excluir };
