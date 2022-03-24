// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passwordcharacters = []
  var passwordLenght=parseInt(window.prompt("Please select the desired lenght for your password between 8 and 128 characters "),10);

  while(passwordLenght<8 || passwordLenght>128 || isNaN(passwordLenght)) {
    alert ("Please select a number between 8 and 128")
    var passwordLenght=parseInt(window.prompt("Please select the desired lenght for your password between 8 and 128 characters "),10);
  }

  var lowercase = window.confirm("Do you want to use lowercase characters")

  var uppercase = window.confirm("Do you want to use uppercase characters")

  var special = window.confirm("Do you want to use special characters")

  var numeric = window.confirm("Do you want to use numeric characters")

  while (lowercase == false && uppercase == false && special== false && numeric == false){
    alert ("You need at least 1 of the options")

    var lowercase = window.confirm("Do you want to use lowercase characters")

    var uppercase = window.confirm("Do you want to use uppercase characters")

    var special = window.confirm("Do you want to use special characters")
  
    var numeric = window.confirm("Do you want to use numeric characters")

  }

  if (lowercase == true){
    passwordcharacters.push ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
   }

  if (uppercase == true){
    passwordcharacters.push ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
   }

   if (special == true){
    passwordcharacters.push ("!","#","$","%","&","/","?",".",",","-","_","+","{","}","(",")")
   }

   if (numeric == true){
    passwordcharacters.push ("1","2","3","4","5","6","7","8","9")
   }

   var index = Math.floor(Math.random()*passwordcharacters.length);
   var pass = [passwordcharacters[index]];

   for (let i = 0; i < passwordLenght-1; i++) {
    var index = Math.floor(Math.random()*passwordcharacters.length);
    pass.push(passwordcharacters[index])
   }
   console.log(pass);
 
  var password = pass.join(""); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
