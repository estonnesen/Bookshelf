import { bookData } from "./book-data.js";

const body = document.querySelector('body')

class Bookshelf {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book)
    }
  
    bookshelfRender() {
      const booksContainer = document.createElement('div');
      booksContainer.classList.add('books-container')
      body.append(booksContainer)
    
      this.books.map((eachBook)=>{
        // const newBook = eachBook.renderBook()
        // booksContainer.append(newBook)
  
        const newContainer = document.createElement('ul')
        newContainer.classList.add('new-container')
        booksContainer.append(newContainer)
  
        const authorLi = document.createElement('li')
        authorLi.classList.add('author')
        authorLi.innerText = eachBook.author
        newContainer.appendChild(authorLi)
  
        const languageLi = document.createElement('li')
        languageLi.classList.add('language')
        languageLi.innerText = eachBook.language
        newContainer.appendChild(languageLi)
  
        const subjectLi = document.createElement('li')
        subjectLi.classList.add('subject')
        subjectLi.innerText = eachBook.subject
        newContainer.appendChild(subjectLi)
  
        const titleLi = document.createElement('li')
        titleLi.classList.add('title')
        titleLi.innerText = eachBook.title
        newContainer.appendChild(titleLi)
      })
  
      return booksContainer
    }

    bookshelfSort() {
        this.books.sort((a, b)=>{
          if(a.author < b.author){
            return -1
          }
          if(a.author > b.author) {
            return 1
          }
          return 0
        })
      }
  }

  class Book {
    constructor(author, language, subject, title) {
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }
    
    // rendering a NEW book
      renderBook(eachBook) {
          const booksContainer = document.querySelector('.books-container'); // ref to master bookshelf list

          const newContainer = document.createElement('ul')
          newContainer.classList.add('new-container')
          booksContainer.prepend(newContainer)

          const authorLi = document.createElement('li')
          authorLi.classList.add('author')
          authorLi.innerText = eachBook.author
          newContainer.appendChild(authorLi)

          const languageLi = document.createElement('li')
          languageLi.classList.add('language')
          languageLi.innerText = eachBook.language
          newContainer.appendChild(languageLi)

          const subjectLi = document.createElement('li')
          subjectLi.classList.add('subject')
          subjectLi.innerText = eachBook.subject
          newContainer.appendChild(subjectLi)

          const titleLi = document.createElement('li')
          titleLi.classList.add('title')
          titleLi.innerText = eachBook.title
          newContainer.appendChild(titleLi)

          return booksContainer;
      }
    }
  
  
  // // Made instance of Bookshelf to then fire off the renderAllBooks function I made within
  // // which appends each book as a new li

//   ***OLD WAY I RENDERED INITIAL BOOKSHELF**
//   bookData.map((book)=>{
//     myBookshelf.addBook(book)
//   })


// RENDER INITIAL BOOKSHELF
  const myBookshelf = new Bookshelf();
  bookData.forEach((book)=>{
    book = new Book(book.author, book.language, book.subject, book.title)
    myBookshelf.addBook(book)
  })
    console.log(myBookshelf)
    // myBookshelf.bookshelfRender()

  // Calling the sort function
//   myBookshelf.bookShelfSort()
  
  
//   **** ADD BOOK BUTTON SECTION ****

  const addBtn = document.querySelector("#addABook");
  
  addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const newBook = new Book();
    const inputAuth = document.querySelector("#Author");
    newBook.author = inputAuth.value
    const inputLang = document.querySelector("#Language");
    newBook.language = inputLang.value
    const inputSubj = document.querySelector("#Subject");
    newBook.subject = inputSubj.value
    const inputTitle = document.querySelector("#Title");
    newBook.title = inputTitle.value
    
    myBookshelf.addBook(newBook) // adds to the actual array of books
    newBook.renderBook(newBook) // renders new book into html via DOM
    console.log(myBookshelf)

    // resets the form input box every time the button is clicked
    inputAuth.value = "";
    inputLang.value = "";
    inputSubj.value = "";
    inputTitle.value = "";
  });

  const sortBtn = document.querySelector('#sort-button')
  
sortBtn.addEventListener("click", function () {
    const booksContainer = document.querySelector('.books-container')
    booksContainer.remove() // removes the original book list I rendered
    // console.log(myBookshelf)
    myBookshelf.bookshelfSort() // this sorts just the array of books including those that were added
    myBookshelf.bookshelfRender() // now we re-render the bookshelf
});

myBookshelf.bookshelfRender()
  
  // // ***EVENTUALLY MAKE A MOUSEOVER TO DISPLAY ALL INFO FOR EACH BOOK****
  // // const bookImage = document.querySelector('li')
  
  // // bookImage.addEventListener('click', function() {
  // // })
  