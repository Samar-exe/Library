// Query DOM elements
let addButton = document.querySelector(".add-btn");
let dialog = document.querySelector("#dialog");
let inputs = document.querySelectorAll(".form-input");
let form = document.querySelector(".form");
let bookContainer = document.querySelector(".books-container");

// Library object
let library = {
  books: [],
  addBook: function (book) {
    this.books.push(book);
  },
  removeBook: function (index) {
    this.books.splice(index, 1);
    unrenderBook(index);
    this.updateIndex();
  },
  updateIndex: function () {
    for (let i = 0; i < this.books.length; i++) {
      this.books[i].index = "index" + i;
    }
    // also set new class inside the DOM
    let books = document.querySelectorAll(".book");
    for (let i = 0; i < books.length; i++) {
      books[i].classList.replace(books[i].classList.item(1), "index" + i);
    }
  },
};

// Book object constructor
class Book{
  constructor(title, author, pages, index, check){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.index = index;
    this.check = check;
  }
}

// Event Listeners
addButton.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (e) => {
  // Prevent the form from submitting to server
  e.preventDefault();

  // get book info
  let title = inputs[0].value;
  let author = inputs[1].value;
  let pages = inputs[2].value;
  let check = document.querySelector(".form-checkbox").checked;

  // create book object
  let book = new Book(
    title,
    author,
    pages,
    "index" + library.books.length,
    check,
  );

  // add book to library
  library.addBook(book);
  // show book
  renderBook(book);
  // reset form
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  // close form
  dialog.close();
});

// Functions to control graphical elements
function renderBook(book) {
  let newBook = document.createElement("div");
  newBook.classList.add("book");
  newBook.classList.add("" + book.index);

  let newTitle = document.createElement("h3");
  let newAuthor = document.createElement("h3");
  let newPages = document.createElement("h3");
  let checked = document.createElement("div");

  if (book.check) {
    checked.classList.add("checked");
  } else {
    checked.classList.add("unchecked");
  }

  checked.addEventListener("click", () => {
    if (book.check) {
      book.check = false;
      checked.textContent = "Not Read";
      checked.classList.replace("checked", "unchecked");
    } else {
      book.check = true;
      checked.textContent = "Read";
      checked.classList.replace("unchecked", "checked");
    }
  });

  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn");
  removeButton.classList.add(book.index);
  let removeButtonContainer = document.createElement("div");
  removeButtonContainer.classList.add("remove-btn-container");
  removeButtonContainer.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    library.removeBook(book.index.slice(5));
  });

  newTitle.textContent = book.title;
  newAuthor.textContent = book.author;
  newPages.textContent = book.pages;
  checked.textContent = book.check ? "Read" : "Not Read";

  newBook.appendChild(removeButtonContainer);
  newBook.appendChild(newTitle);
  newBook.appendChild(newAuthor);
  newBook.appendChild(newPages);
  newBook.appendChild(checked);

  bookContainer.appendChild(newBook);
}

function unrenderBook(index) {
  let book = document.querySelector(`.index${index}`);
  book.remove();
}
