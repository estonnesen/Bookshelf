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

        const commentBtn = document.createElement('button')
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comments')
        commentBtn.classList.add('commentBtn')
        commentBtn.innerText = "Comment"
        commentDiv.append(commentBtn)
        newContainer.appendChild(commentDiv)

        // create comment elements after button is clicked
        const commentUl = document.createElement('ul')
        commentUl.classList.add('comment')
        commentDiv.appendChild(commentUl)

        // creating a loop to scan through comment array I added to the Book class
        // and create DOM for each string at a given index
        const bookComment = eachBook.comment
              for(let i = 0; i < bookComment.length; i++){
                let eachComment = bookComment[i]
                // console.log(bookAuthor)
                const commentLi = document.createElement('li')
                commentLi.classList.add('comment-li')
                commentLi.innerText = eachComment
                commentUl.appendChild(commentLi)
        }
  
        // this creates the input field when comment button is clicked
        commentBtn.addEventListener('click', () => {
          const inputField = document.createElement('input')
          inputField.classList.add('comment-input')
          inputField.setAttribute("placeholder", "Comment and Press ENTER (280 Char Max)")
          inputField.setAttribute("maxlength", 280)
          commentDiv.append(inputField)

          // this section adds the user input value to the this.books array and re-renders the Bookshelf
          inputField.addEventListener('keypress', (e) => {
            if (e.key === "Enter") {
              // const inputText = document.createElement('li')
              // inputText.classList.add('inputText')
              // inputText.innerText = inputField.value
              const newComment = eachBook.comment
              newComment.push(`${inputField.value}`)
              // commentDiv.append(inputText)

              inputField.value = "" // sets input field empty again
              //   inputField.disabled = true
              booksContainer.remove() // removes the original book list I rendered
              myBookshelf.bookshelfRender() // now we re-render the bookshelf
            }
          })

          commentBtn.disabled = true // this makes it so you can't keep adding input fields (googled this)
        })

        const authorUl = document.createElement('ul') // ul container for multiple items in author array
        authorUl.classList.add('author')
        authorUl.innerText = `AUTHOR: `// ${eachBook.author}` 
        newContainer.appendChild(authorUl)

        // attempting to break out each item from author array
        // it works!!
        const bookAuthor = eachBook.author
            for(let i = 0; i < bookAuthor.length; i++){
                let eachAuthor = bookAuthor[i]
                // console.log(bookAuthor)
                const authorLi = document.createElement('li')
                authorLi.innerText = eachAuthor
                authorUl.appendChild(authorLi)
            }
          
  
        const languageLi = document.createElement('li')
        languageLi.classList.add('language')
        languageLi.innerText = `LANGUAGE: ${eachBook.language}`
        newContainer.appendChild(languageLi)
  
        const subjectUl = document.createElement('ul') // ul container for multiple items in subject array
        subjectUl.classList.add('subject')
        subjectUl.innerText = `SUBJECT: ` // ${eachBook.subject}
        newContainer.appendChild(subjectUl)

        // attempting to break out each item from subject array
        const bookSubject = eachBook.subject
            for(let i = 0; i < bookSubject.length; i++){
                let eachSubject = bookSubject[i]
                const subjectli = document.createElement('li')
                subjectli.innerText = eachSubject
                subjectUl.appendChild(subjectli)
            }
  

  
        const titleLi = document.createElement('li')
        titleLi.classList.add('title')
        titleLi.innerText = `TITLE: ${eachBook.title}`
        newContainer.appendChild(titleLi)
      })
      return booksContainer
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
      this.comment = []; // this we will use to push user input into and re-render when submitted
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }

    // ***** OLD WAY I RENDERED THE BOOK ON MY FIRST SUBMISSION  *****
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
  
  
// ADD BOOK BUTTON SECTION

  const addBtn = document.querySelector("#addABook");
  
  addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const booksContainer = document.querySelector('.books-container') // this is targeting the bookshelf DOM we've already rendered

    const newBook = new Book();
    const inputAuth = document.querySelector("#Author");
    newBook.author = [inputAuth.value]
    const inputLang = document.querySelector("#Language");
    newBook.language = inputLang.value
    const inputSubj = document.querySelector("#Subject");
    newBook.subject = [inputSubj.value]
    const inputTitle = document.querySelector("#Title");
    newBook.title = inputTitle.value

    booksContainer.remove() // removes the original book list I rendered
    myBookshelf.addBook(newBook) // adds new instance of Book to the actual array of books
    console.log(myBookshelf) // logging this every time very helpful to check whether data is properly added or not
    myBookshelf.bookshelfRender() // now we re-render the bookshelf!

    // resets the form input box every time the button is clicked
    inputAuth.value = "";
    inputLang.value = "";
    inputSubj.value = "";
    inputTitle.value = "";
  });

// const sortBtn = document.querySelector('#sort-button') // used this in earlier versions to test sorting with a button

// SORT DROPDOWN MENU SECTION

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


// REGISTRATION ATTEMPT
const regBtn = document.querySelector('#submitBtn')
const regDiv = document.querySelector('.registration')

regBtn.addEventListener('click', ()=>{
  regDiv.remove()
  myBookshelf.bookshelfRender()
}) 

// INITAL RENDER OF THE NEW BOOKSHELF WITH THE GIVEN BOOK-DATA

// myBookshelf.bookshelfRender()

  // // ***EVENTUALLY MAKE A MOUSEOVER TO DISPLAY ALL INFO FOR EACH BOOK****
  // // const bookImage = document.querySelector('li')
  
  // // bookImage.addEventListener('click', function() {
  // // })
  