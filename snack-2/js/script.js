const  listElement = document.querySelector('div.list')

// creo la sezione for per inserire i primi 6 numeri

for ( let i = 1; i < 7; i++){
    const cardElement = document.createElement('h2')
    cardElement.className = 'number'
    cardElement.innerHTML = i

    listElement.appendChild(cardElement)

    console.log(cardElement)

    if( i % 2 == 0){
        cardElement.className = 'text-green'
    } else {
        cardElement.className = 'text-dark'
    }
}
