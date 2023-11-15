
const array = [];

for(let i = 0; i <= 100; i++){
    
    if(i % 7 == 0){
        array.push(i);
    } else if (i % 8 == 0){
        array.push(i)
    }
    console.log(array[i])
}

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}