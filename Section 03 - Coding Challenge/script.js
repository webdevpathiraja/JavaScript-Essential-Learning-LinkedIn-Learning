class Book {
    constructor (
        bookTitle,
        bookAuthor,
        bookISBN,
        bookPubYear   
    ) {
        this.title = bookTitle;
        this.author = bookAuthor;
        this.ISBN = bookISBN;
        this.publicationYear = bookPubYear;
        
    }
}

const book = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);
console.log(book);


/*
Book {
  title: "Alice's Adventures in Wonderland",
  author: 'Lewis Carroll',
  ISBN: 9798369203415,
  publicationYear: 1865
}
✓ Test passed: Title matches data.
✓ Test passed: Author matches data.
✓ Test passed: ISBN matches data.
✓ Test passed: Publication year matches data.

Tests passed: 4 of 4
> All tests passed

Well done! You reached the expected result.
Your code returned:
Book {
  title: "Alice's Adventures in Wonderland",
  author: 'Lewis Carroll',
  ISBN: 9798369203415,
  publicationYear: 1865
}
  */