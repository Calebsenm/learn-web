
let food1 = "tomato"; 
let food2 = "pear";
let food3 = "orange";
let food4 = "banana"; 

function foods(...food){
    console.log(...food); 
}

function gedFood(...food){
    return  food; 
} 

foods(food1, food2, food3 , food4);

let newFoods = gedFood( food1, food2, food3 ,food4);
console.log(newFoods); 
