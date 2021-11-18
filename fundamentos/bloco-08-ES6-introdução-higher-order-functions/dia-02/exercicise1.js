const books = require('./books');
  
  // Adicione o código do exercício aqui:

 /*  1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. */

 function authorBornIn1947() {
   const author = books.find((book) => book.author.birthYear === 1947)
    return author;
  }

  console.log(authorBornIn1947());

  