let myLibrary = [];
const sub = document.getElementById('submit');
const form = document.querySelector('#submitBook');
const modal = document.querySelector('.modal');
const btn = document.querySelector('.newBook');
const span = document.querySelector('.close');



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
function createCard() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageLength = document.getElementById("pageLength").value;
    const readStatus = document.getElementById("readStatus").value;
 
    ex = new Book(title, author, readStatus, pageLength)
    addBookToLibrary(ex)
    console.log(myLibrary)
    const div = document.createElement('div');
  
    div.className = 'card'
    div.innerHTML =  
    `<h2> ${ex.title} </h2>
    <p> ${ex.author} </p>
    <p class="pageLength"> ${ex.ageLength} </p>
    <button class="readToggle"> ${ex.readStatus}</button>`;
    document.querySelector('.container').appendChild(div);

    document.getElementById("title").value = ''
    document.getElementById("author").value = ''
    document.getElementById("pageLength").value = ''
    document.getElementById("readStatus").value = ''
     
}
span.onclick = function() {
    modal.style.display = "none";
  }
  


 sub.addEventListener('click', (event) => {
    event.preventDefault()
    createCard()
 });

btn.onclick = function () {
    modal.style.display = "block"
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }