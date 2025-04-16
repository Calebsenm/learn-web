
const increse = document.getElementById("increase"); 
const reset = document.getElementById("reset"); 
const decrease = document.getElementById("decrease");   

const countLabel = document.getElementById("countLabel"); 
let count = 0; 

increse.onclick = function(){
    count++ ; 
    countLabel.textContent = count; 
}

decrease.onclick = function(){
    count--;  
    countLabel.textContent = count; 
}

reset.onclick = function(){
    count = 0; 
    countLabel.textContent= count; 
}

