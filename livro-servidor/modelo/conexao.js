const mongoose = require('mongoose');

const banco = mongoose;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

module.exports = banco;