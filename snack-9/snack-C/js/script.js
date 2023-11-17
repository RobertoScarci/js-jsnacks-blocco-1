
let numeroA = prompt('Inserisci un numero di due cifre')
let numeroB = prompt('Inserisci un numero di quattro cifre')

let numeroFinale;

for ( let i = numeroA; i <= numeroB; i = i * 2){
    if( i >= numeroB / 2){
        numeroFinale = i;
    } 
    console.log(i);
}

console.log(numeroFinale);