
const pi = 3.14149
let radius; 
let circunference; 

document.getElementById("mySubmit").onclick = function(){
     
    radius = document.getElementById("myText").value; 
    radius = Number(radius);

    circunference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circunference + " CM"; 
}

