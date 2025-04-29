
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age; 

mySubmit.onclick = function(){
      
    age = myText.value;  
    age = Number(age); 

    if(age >= 100){
            resultElement.textContent = 'You are too old to enter tis site'; 
    }   else if(age == 0){
            resultElement.textContent = 'Incorrect age'; 
    }   else if(age >= 18){
            resultElement.textContent = 'You Can enter this site'; 
    }   else{
             resultElement.textContent = 'You cannot enter this site';
    }
}
