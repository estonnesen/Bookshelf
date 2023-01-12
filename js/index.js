import { bookData } from "./book-data.js";

const body = document.querySelector('body')

class Bookshelf {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.unshift(book)
    }

    bookshelfRender() { // this function uses .map to scan through this.books array and render them to html when called upon
      const booksContainer = document.createElement('div');
      booksContainer.classList.add('books-container')
      body.append(booksContainer)

      this.books.map((eachBook)=>{ 
        const newContainer = document.createElement('ul')
        newContainer.classList.add('new-container')
        booksContainer.append(newContainer)

        // Create comment button for each new div that's rendered
          const addComment = () => {
              const commentBtn = document.createElement('button')
              const commentDiv = document.createElement('div')
              commentDiv.classList.add('comments')
              commentBtn.classList.add('commentBtn')
              commentBtn.innerText = "Comment"
              commentDiv.append(commentBtn)
              newContainer.appendChild(commentDiv)

              commentBtn.addEventListener('click', () => {
                  const inputField = document.createElement('input')
                  inputField.classList.add('comment-input')
                  inputField.setAttribute("placeholder", "Comment Here and press ENTER")
                  inputField.setAttribute("maxlength", 280)
                  commentDiv.append(inputField)
                //   console.log(inputField)

                  inputField.addEventListener('keypress', (e) => {
                      if (e.key === "Enter") {
                          const inputText = document.createElement('p')
                          inputText.classList.add('inputText')
                          inputText.innerText = inputField.value
                          commentDiv.append(inputText)

                          inputField.value = "" // sets input field empty again
                        //   inputField.disabled = true
                      }
                  })

                  commentBtn.disabled = true // this makes it so you can't keep adding input fields (googled this)
              })
          }
        
        addComment()

  
        const authorLi = document.createElement('li')
        authorLi.classList.add('author')
        authorLi.innerText = `AUTHOR: ${eachBook.author}` 
        newContainer.appendChild(authorLi)
  
        const languageLi = document.createElement('li')
        languageLi.classList.add('language')
        languageLi.innerText = `LANGUAGE: ${eachBook.language}`
        newContainer.appendChild(languageLi)
  
        const subjectLi = document.createElement('li')
        subjectLi.classList.add('subject')
        subjectLi.innerText = `SUBJECT: ${eachBook.subject}`
        newContainer.appendChild(subjectLi)
  
        const titleLi = document.createElement('li')
        titleLi.classList.add('title')
        titleLi.innerText = `TITLE: ${eachBook.title}`
        newContainer.appendChild(titleLi)
      })
      return booksContainer
    }

    addComment() {

    }
    
    // Sorting functions. Not quite sure how to consolidate all this into one function yet...
    authorSort() {
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
      
    subjectSort() {
        this.books.sort((a, b)=>{
          if(a.subject < b.subject){
            return -1
          }
          if(a.subject > b.subject) {
            return 1
          }
          return 0
        })
      }

    languageSort() {
        this.books.sort((a, b)=>{
          if(a.language < b.language){
            return -1
          }
          if(a.language > b.language) {
            return 1
          }
          return 0
        })
      }

    titleSort() {
        this.books.sort((a, b)=>{
          if(a.title < b.title){
            return -1
          }
          if(a.title > b.title) {
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
    //   this.comment = []
    }
    
    // rendering a NEW book
    // ******REDUNDANT*****
    //   renderBook(eachBook) {
    //       const booksContainer = document.querySelector('.books-container'); // ref to master bookshelf list

    //       const newContainer = document.createElement('ul')
    //       newContainer.classList.add('new-container')
    //       booksContainer.prepend(newContainer)

    //       const commentBtn = document.createElement('button')
    //       commentBtn.classList.add('commentBtn')
    //       commentBtn.innerText = "Comment"
    //       newContainer.appendChild(commentBtn)

    //       const authorLi = document.createElement('li')
    //       authorLi.classList.add('author')
    //       authorLi.innerText = `Author: ${eachBook.author}`
    //       newContainer.appendChild(authorLi)

    //       const languageLi = document.createElement('li')
    //       languageLi.classList.add('language')
    //       languageLi.innerText = eachBook.language
    //       newContainer.appendChild(languageLi)

    //       const subjectLi = document.createElement('li')
    //       subjectLi.classList.add('subject')
    //       subjectLi.innerText = eachBook.subject
    //       newContainer.appendChild(subjectLi)

    //       const titleLi = document.createElement('li')
    //       titleLi.classList.add('title')
    //       titleLi.innerText = eachBook.title
    //       newContainer.appendChild(titleLi)

    //       return booksContainer;
    //   }
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
    const booksContainer = document.querySelector('.books-container')

    const newBook = new Book();
    const inputAuth = document.querySelector("#Author");
    newBook.author = inputAuth.value
    const inputLang = document.querySelector("#Language");
    newBook.language = inputLang.value
    const inputSubj = document.querySelector("#Subject");
    newBook.subject = inputSubj.value
    const inputTitle = document.querySelector("#Title");
    newBook.title = inputTitle.value

    booksContainer.remove() // removes the original book list I rendered
    myBookshelf.addBook(newBook) // adds to the actual array of books
    // newBook.renderBook(newBook) // renders new book into html via DOM
    console.log(myBookshelf)
    myBookshelf.bookshelfRender() // now we re-render the bookshelf

    // resets the form input box every time the button is clicked
    inputAuth.value = "";
    inputLang.value = "";
    inputSubj.value = "";
    inputTitle.value = "";
  });

// const sortBtn = document.querySelector('#sort-button') // used this in earlier versions to test sorting with a button

const sortingSelection = document.getElementById("sort")
  
sortingSelection.addEventListener("change", function () {
    const booksContainer = document.querySelector('.books-container')
    if(this.value === "makeSelect") {
        console.log('Make a selection') // testing drop down each time...
    }
    if(this.value === "author") {
        console.log('you selected author') // testing drop down each time...
        myBookshelf.authorSort()
    }
    if(this.value === "subject") {
        console.log('you selected subject')
        myBookshelf.subjectSort()
    }
    if(this.value === "language") {
        console.log('you selected language')
        myBookshelf.languageSort()
    }
    if(this.value === "title") {
        console.log('you selected title')
        myBookshelf.titleSort()
    }

    booksContainer.remove() // removes the original book list I rendered
    myBookshelf.bookshelfRender() // now we re-render the bookshelf
    console.log(myBookshelf)
}, false);

// commentBtn.addEventListener('click', ()=>{
//     console.log('comment button')
// })

myBookshelf.bookshelfRender()

  // // ***EVENTUALLY MAKE A MOUSEOVER TO DISPLAY ALL INFO FOR EACH BOOK****
  // // const bookImage = document.querySelector('li')
  
  // // bookImage.addEventListener('click', function() {
  // // })
  