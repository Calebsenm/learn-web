
function add(a , b){
    let result = a + b;
    return result 
}

function sudtraccion(a , b){
    return a - b
}

function multiply(a , b){
    return a * b 
}

function divide(a , b){
    return a / b 
}


function isEven( number ){
    return number % 2 === 0 ? true : false; 
}

function isValideEmail( email){
    if(email.includes("@")){
        return true 
    }   else {
        return false 
    }
}


let answer0 = add(3 + 3); 
console.log(answer0)

let answer1 = sudtraccion(3 + 3); 
console.log(answer1)

let answer2 = multiply(1 , 3);
console.log(answer2)

let answer3 = divide(2 , 6);
console.log(answer3)

let answer4 = isEven( 223);
console.log(answer4)

let answer5 = isValideEmail("tomate@gmail.com")
console.log(answer5)