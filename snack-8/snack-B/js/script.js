const userNumber = prompt('Inserisci un numero di 7 cifre');

const digitArray = userNumber.split('');

let somma = 0;

for( let i = 0; i < digitArray.length; i++){
    somma = somma + parseInt(digitArray[i]);
}

console.log(somma)