
function sum(...numbers){
        
    let sumTotal = 0; 
    for (let number of numbers) {
        sumTotal += number; 
    }
    return sumTotal; 
}

function average(...numbers){
        
    let sumTotal = 0; 
    for (let number of numbers) {
        sumTotal += number; 
    }
    return sumTotal / numbers.length ; 
}

let sumTotal = sum(1,2,3,4,5);
let sumAverage = average(1,2,634, 12, 64,23,654,98);

console.log(`Your ${sumTotal}`);
console.log(`Average ${sumAverage}`);

