
let fruits = ["apple", "orange", "banana"]; 

console.log(fruits)
console.log(fruits[0])

fruits[0] = "mango"
console.log(fruits)


fruits.push("coconut"); 
fruits.pop();
fruits.unshift("pear");
fruits.shift(); 

let numOfFruits = fruits.length; 
let index = fruits.indexOf("mango");


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]); 
}


for(let i = fruits.length -1 ; i >= 0 ; i--){
    console.log(fruits[i]); 
}

fruits.sort().reverse(); 

for(let fruit of fruits){
    console.log(fruit); 
}



