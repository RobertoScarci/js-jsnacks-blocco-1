// chiedo all'utente le parole da inserire
const firstWord = prompt('Type a casual word')
const secondWord = prompt('Type another casual word')
const stampa = document.querySelector('div.stampa')

// faccio stampare prima la parola più corta, poi quella più lunga
if( firstWord.length > secondWord.length ){
    stampa.innerHTML = secondWord + firstWord
} else if( firstWord.length < secondWord.length ){
    stampa.innerHTML = firstWord + secondWord
} 