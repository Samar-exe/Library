let body = document.querySelector('body')
let book_container = document.querySelector('.books-container')
let add_book_button = document.querySelector('.add-btn')
let form_dialog = document.querySelector('#dialog')
add_book_button.addEventListener("click", (e) => {
	e.preventDefault();
	form_dialog.showModal();
})
// Creating book element and adding it to the container.
//let book = document.createElement('div')
//book.textContent = "Book"
//book.setAttribute("class", "card")
//book_container.appendChild(book);
