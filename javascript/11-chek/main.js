
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn"); 
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult"); 
const paymentResult = document.getElementById("paymentResult"); 

mySubmit.onclick = function(){
    if(myCheckBox.checked){
            subResult.textContent = `You are subscribed!`; 
    }   else {
            subResult.textContent = `You are not subscribed!`;  
    }  

    if(visaBtn.checked){
            paymentResult.textContent = `You selected Visa`;  
    }   else if(paypalBtn.checked){
            paymentResult.textContent = `You selected PayPal`;        
    }   else if(masterCardBtn.checked){
            paymentResult.textContent = `You selected Masterdcard`;  
    }
}
