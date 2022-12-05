let myLibrary = [];
const cont = document.querySelector('.container');

function Book(title, author, pageLength, readStatus) {
    this.title = title;
    this.author = author;
    this.pageLength = pageLength;
    
    if (readStatus == 'yes' | 'y') {
        this.readStatus = 'read';
    }
    else {
        this.readStatus = 'not read yet';
    }
     
    this.info = function() {
        return `${title} by ${author}, ${pageLength} pages, ${readStatus}`
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function createCard(book) {
    const div = document.createElement('div');
    console.log(book.name)
    div.className = 'card'
    div.innerHTML =  `
    <h2> ${book.title} </h2>
    <p> ${book.author} </p>
    <p class="pageLength"> ${book.pageLength} </p>
    <button class="readToggle"> ${book.readStatus}</button>
    `
    document.querySelector('.container').appendChild(div)

 
}