//importing the bookData array from book-data.js
//this is an array that looks like [obj, obj, obj ...]
import { bookData } from './js/book-data.js';

//Grabbing a DOM element to append the bookshelf to
const main = document.querySelector('main');
//header/title
//creating a header element
const title = document.createElement('h1')
main.appendChild(title);
title.innerHTML = 'Bookshelf';

//Here I'm creating my form elements.  This could be hard coded in the HTML, but I wanted to practice creating elements in JS.
//create form for book entry
const bookForm = document.createElement('form');
bookForm.classList.add('book-form');
main.appendChild(bookForm);

//create form elements
const bookTitle = document.createElement('input');
bookTitle.setAttribute('type', 'text');
bookTitle.setAttribute('placeholder', 'Title');
bookForm.appendChild(bookTitle);

const bookAuthor = document.createElement('input');
bookAuthor.setAttribute('type', 'text');
bookAuthor.setAttribute('placeholder', 'Author');
bookForm.appendChild(bookAuthor);

const bookLanguage = document.createElement('input');
bookLanguage.setAttribute('type', 'text');
bookLanguage.setAttribute('placeholder', 'Language');
bookForm.appendChild(bookLanguage);

const bookSubject = document.createElement('input');
bookSubject.setAttribute('type', 'text');
bookSubject.setAttribute('placeholder', 'Subject');
bookForm.appendChild(bookSubject);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerHTML = 'Add Book';
bookForm.appendChild(submitButton);

//Here I'm going to create a div to store all my books
//create div for book list
const bookList = document.createElement('div');
bookList.classList.add('shelves');
main.appendChild(bookList);

//The Bookshelf constructor.  This will be used to create a new bookshelf.
class Bookshelf {
  constructor() {
    //it simply has an array of books that starts out empty
    this.books = [];
  };

  addBook(book) {
    //this method will add a book to the bookshelf by pushing it to the books array
    this.books.push(book);
  };

  render() {
    //I'm going to create a div here to hold the book info.  Some people used a UL or OL, instead.  There is no required container for this info, just use what makes sense to you.
    const bookCard = document.createElement('div');

    //This is going to append each book card to the booklist DOM element I created on line 47
    bookList.appendChild(bookCard);

    //For each book in my books array I'm going to create a new Book object and render it to the DOM.
    for (const book of this.books) {
      const newBook = book.render();
      bookCard.appendChild(newBook);
    };

    //return the book card!!
    return bookCard;

    //There is more than one way to do this, too, but as you'll see below, the basic process is call the render method, create a new element, append it to the DOM, and then return it.
  };
};

//Right away I'm gonna create a new bookshelf with my Bookshelf constructor, but I could have put it further down in the code
const _bookshelf = new Bookshelf();

//Now I'm gonna create my Book class and constructor
class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
  };

  render() {
    //same as above, create elements and append.
    const bookCard = document.createElement('div');
    bookList.appendChild(bookCard);
    bookCard.classList.add('book-card');

    //title
    const bookTitle = document.createElement('h3');
    bookCard.appendChild(bookTitle);
    bookTitle.classList.add('book-title');
    bookTitle.innerHTML = this.title;

    //author(s)
    const bookAuthor = document.createElement('ul');
    bookCard.appendChild(bookAuthor);
    bookAuthor.classList.add('book-author');
    bookAuthor.innerText = 'Author:';
    
    //author is an array.  Because I'm holding my book info in a div, I wanted to take this array and make a list.  This is more coplicated than what was required. I could have just put the contents in a span, p, li, etc. without looping through it and grabbing each element individually.
    //loop through author array and add to list
    for (const auth of this.author) {
      const authorLi = document.createElement('li');
      bookAuthor.appendChild(authorLi);
      authorLi.innerHTML = auth;
    };

    //language
    const bookLanguage = document.createElement('p');
    bookCard.appendChild(bookLanguage);
    bookLanguage.classList.add('book-language');
    bookLanguage.innerText = `Language: ${this.language}`;

    //subject
    //see my notes on author above.  Subject is an array, so I did the same thing.  Not necessary for this project.
    const bookSubject = document.createElement('ul');
    bookCard.appendChild(bookSubject);
    bookSubject.classList.add('book-subject');
    bookSubject.innerHTML = 'Subject: ';
    //loop through subject array and add to list
    for (const subj of this.subject) {
      const subjectLi = document.createElement('li');
      bookSubject.appendChild(subjectLi);
      subjectLi.innerHTML = subj;
    };

    //return the book card!!
    return bookCard;
  };
};

//loop through bookData and add to bookshelf
//Here I'm creating my new Book objects! But I could have done this inside the bookshelf constructor, and most people did, or tried to!
//Note that I'm adding them to my _bookshelf, which is a new instance of the Bookshelf constructor.
for (const book of bookData) {
  const newBook = new Book(book.author, book.language, book.subject, book.title);
  _bookshelf.addBook(newBook);
};

//manually add book to bookshelf
//Here is a mostly working event listener for my submission form.  I'm not sure why it's not working, but I'm sure it's something simple.  I'm going to keep working on it.
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(
    bookAuthor.value, 
    bookLanguage.value, 
    bookSubject.value, 
    bookTitle.value
  );
  _bookshelf.addBook(newBook);
  bookForm.reset();
});

//render bookshelf
//Appending a render of my bookshelf to the DOM. Otherwise only 1 book will appear.  There are multiple ways to handle this issue.  This is not the "most correct" way.
document.body.append(_bookshelf.render());