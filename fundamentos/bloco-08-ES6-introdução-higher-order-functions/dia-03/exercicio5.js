const books = require('./books');

/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas
 as pessoas autoras de ficção científica ou fantasia. */


 const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
    const wantedGenres = ['Fantasia', 'Ficção Científica'];
    const result = books.filter((book) => wantedGenres.includes(book.genre)).map((book) => book.author.name).sort();
    return result;
  }

  console.table(fantasyOrScienceFictionAuthors());