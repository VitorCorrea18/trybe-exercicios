const books = require('./books');

/* 2 - Retorne o nome do livro de menor nome. */

function smallerName() {
    let nameBook;
    books.forEach((book) => {

        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        }

    })
    return nameBook;
}

console.log(smallerName());