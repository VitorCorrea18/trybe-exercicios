const books = require('./books');


/* 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */


const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks() {
    // escreva seu código aqui
    const result = books.filter((book) => 2020 - book.releaseYear > 60).map((book) => book.name);
    return result;
  }

  console.table(oldBooks());