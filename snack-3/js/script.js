const  listElement = document.querySelector('div.list')

// creo la sezione for per inserire i primi 6 numeri

for ( let i = 0; i <= 20; i = i + 2){
    const cardElement = document.createElement('h2')
    cardElement.innerHTML = i

    listElement.appendChild(cardElement)

    console.log(i)

    if( i > 8 ){
        cardElement.className = 'text-blue'
    } else {
        cardElement.className = 'text-yellow'
    }
}
