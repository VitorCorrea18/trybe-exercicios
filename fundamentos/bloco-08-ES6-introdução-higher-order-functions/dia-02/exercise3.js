const books = require('./books');

/* const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  }; */
  
  function getNamedBook() {
      let namedBook;
    books.find((book) => {
        if(book.name.length === 26) {namedBook = book;}
    })
    return namedBook;
  }

  console.log(getNamedBook());