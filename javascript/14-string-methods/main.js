
let userName = "BroCode";
console.log(userName.charAt(1));
console.log(userName.indexOf("C")); 
console.log(userName.lastIndexOf("o")); 
console.log(userName.length); 


let my_name = "  Caleb   "; 
my_name = my_name.trim(); 
console.log(my_name);


my_name = my_name.toUpperCase(); 
console.log(my_name); 


my_name = my_name.toLowerCase(); 
console.log(my_name); 


my_name = my_name.repeat(2); 
console.log(my_name); 


let userName1 = "Tomate";  
let result = userName1.startsWith(" ");
if(result){
    console.log("Your username cannot begin with ' '");
}else {
    console.log(userName1);
}


result = userName1.endsWith(" ");

if(result){
    console.log("Your username cannot end with ' '");
}else {
    console.log(userName1);
}


result = userName1.includes(" ");

if(result){
    console.log("Your username include ' '");
}else { 
    console.log(userName1);
}


let foneNumber = "123-456-789"; 
foneNumber = foneNumber.replaceAll("-","/")
console.log(foneNumber); 

foneNumber = foneNumber.padStart(16, "0"); 
console.log(foneNumber);

foneNumber = foneNumber.padEnd(20,"*");
console.log(foneNumber);


