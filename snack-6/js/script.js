
// preparo la lista degli invitati
const nameList = [
    'Giovannino',
    'Anakin Skywalker',
    'Obi-Wan Kenobi',
    'Walter White',
    'Jesse Pinkman',
    'Roberto Scarci',
];

const buttonElement = document.querySelector('button');
const outputElement = document.querySelector("#output-result");

buttonElement.addEventListener('click', function(){
    const userChoice = document.getElementById('input-name').value;

    let userName = false;

    // controlla che il nome sia nella lista
    for (let i = 0 ; i < nameList.length ; i++){
        if (userChoice == nameList[i]){
            userName = true;
        }
    }

    console.log(userName);

    if (userName == true) {
        outputElement.innerHTML = 'Sei tra gli invitati!';
        outputElement.classList.add('text-green');
        outputElement.classList.remove('text-red');
    } else {
        outputElement.innerHTML = 'Non sei tra gli invitati!';
        outputElement.classList.add('text-red');
        outputElement.classList.remove('text-green');
    }
})