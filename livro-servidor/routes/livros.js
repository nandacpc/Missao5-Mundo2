const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

router.get('/', async (req, res, next) => {
  try {
    const livros = await livroDao.obterLivros();
    res.json(livros);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const livro = req.body;
    const novoLivro = await livroDao.incluir(livro);
    res.json({ message: 'Livro incluído com sucesso!' });
  } catch (error) {
    next(error);
  }
});

router.delete('/:codigo', async (req, res, next) => {
  try {
    const codigo = req.params.codigo;
    await livroDao.excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
