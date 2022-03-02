let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.name = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
      if (read == true) {
        return `${title} by ${author}, ${pages}, Read`
      }
      else {
        return `${title} by ${author}, ${pages}, not read yet`
      }
  }

}
const showInfo = function(book) {
    alert(book.info())
}

const remove = function(book) {
    myLibrary = myLibrary.filter(function(value) {
        return value !== book;
    });
    console.log(myLibrary)
    DisplayBooks(myLibrary)
}

const toggleRead = function(book) {

    myLibrary = myLibrary.filter(function(value) {
        return value !== book;
    });

    if (book.read == true) {
        book.read = false
    }
    else {
        book.read = true
    }

    myLibrary.push(book)
    console.log(myLibrary)

    DisplayBooks(myLibrary)

}
function addBookToLibrary() {
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const checked = document.getElementById("read").checked         
    let book = new Book(title, author, pages, checked)
    myLibrary.push(book)
    DisplayBooks(myLibrary)
}

const DisplayBooks = function(library) {

    const libraryCard = document.getElementById("library")
    libraryCard.innerHTML = ''
    for (let i = 0; i < library.length; i++) {
        let item = document.createElement('p');
        item.textContent = library[i].name;

        const infoButton = document.createElement('button')
        infoButton.onclick = function(event) {showInfo(library[i])}
        infoButton.innerHTML = 'show info'

        const removeButton = document.createElement('button')
        removeButton.onclick = function(event) {remove(library[i])}
        removeButton.innerHTML = 'remove'

        const readButton = document.createElement('button')
        readButton.onclick = function(event) {toggleRead(library[i])}
        readButton.innerHTML = 'toggle read'

        libraryCard.appendChild(item)
        libraryCard.appendChild(infoButton)
        libraryCard.appendChild(removeButton)
        libraryCard.appendChild(readButton)
    }
}