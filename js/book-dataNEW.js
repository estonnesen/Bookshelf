// import { bookData } from "./book-data.js";
// console.log(bookData)


// // Created this function to retrieve all the books in one go
// // and then create a variable from that executed function which
// // I can use to push into bookshelf or directly into the html

// const body = document.querySelector("body");

// //Bookshelf class that has empty constructor because it doesn't really contain any properties

// DOM element for Bookshelf div
// const bookshelfDiv = document.createElement('div');
// bookshelfDiv.classList.add("master_shelf");
class Bookshelf {
  constructor() {
    this.books = [];
    console.log(this.books)
  }

  addBook(book) {
    this.books.push(book)
  }

  bookshelfRender() {
    const booksContainer = document.createElement('div');
    booksContainer.classList.add('books-container')
    // bookshelfDiv.appendChild(booksContainer);
  
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

  bookShelfSort(){
    bookData.sort((a, b)=>{
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
  renderBook() {
    // const userBook = (aBook) => {
      // console.log(aBook);
      const bookContainer = document.createElement('div');
      bookContainer.classList.add("book_container")
      console.log(bookContainer)
      const author = document.createElement("h3");
      const language = document.createElement("h3");
      const subject = document.createElement("h3");
      const title = document.createElement("h3");
      //make pieces
      //add content
      author.innerHTML = this.author;
      language.innerHTML = this.language;
      subject.innerHTML = this.subject;
      title.innerHTML = this.title;
      bookContainer.append(author, language, subject, title);

      return bookContainer;
    };

    // bookData.map((singleObj) => {
    //   console.log(singleObj);
    //   const card = cardMaker(singleObj);
    //   body.append(card);
    // });

  }
// }




// // Made instance of Bookshelf to then fire off the renderAllBooks function I made within
// // which appends each book as a new li
const testBook = new Book("erik", "tonnesen", "wrote", "this");
console.log(testBook)
// bookData.map((obj)=>{
//   books.addBook(obj)
// })

// books.renderBook();
const myBookshelf = new Bookshelf();
bookData.map((book)=>{
  myBookshelf.addBook(book)
})
console.log(myBookshelf)

const bookshelfDiv = document.createElement('div');
bookshelfDiv.classList.add('bookshelf_div')
document.body.append(myBookshelf.bookshelfRender());

// Calling the sort function
myBookshelf.bookShelfSort()


// createBookShelf.addBook()
console.log(myBookshelf.bookShelfSort());
// createBookShelf.renderAllBooks();

// // Using DOM I selected the button ID I made and set an
// // event to it to collect and append the data sumitted
// // to create a new book

const addBtn = document.querySelector("#addABook");

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let userBook = [];
  const inputAuth = document.querySelector("#Author");
  userBook.push(inputAuth.value);
  const inputLang = document.querySelector("#Language");
  userBook.push(inputLang.value);
  const inputSubj = document.querySelector("#Subject");
  userBook.push(inputSubj.value);
  const inputTitle = document.querySelector("#Title");
  userBook.push(inputTitle.value);

  let userOutput = document.querySelector("#formOutput");
  let newBookItem = document.createElement("li");
  newBookItem.innerHTML = userBook;
  userOutput.appendChild(newBookItem);

  // resets the form input box every time the button is clicked
  inputAuth.value = "";
  inputLang.value = "";
  inputSubj.value = "";
  inputTitle.value = "";
  // console.log(userBook)
});

// // ***EVENTUALLY MAKE A MOUSEOVER TO DISPLAY ALL INFO FOR EACH BOOK****
// // const bookImage = document.querySelector('li')

// // bookImage.addEventListener('click', function() {
// // })
