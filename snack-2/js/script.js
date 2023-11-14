const  listElement = document.querySelector('ul.list')

// creo la sezione for per inserire i primi 6 numeri

for ( let i = 1; i < 7; i++){
    const cardElement = document.createElement('li')
    cardElement.className = 'number'
    cardElement.innerHTML = i

    listElement.appendChild(cardElement)

    console.log(cardElement)
}