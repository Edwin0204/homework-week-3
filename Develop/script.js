// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordcharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Write password to the #password input
function writePassword() {
  var passwordLenght=parseInt(window.prompt("Please select the desired lenght for your password between 8 and 128 characters "),10);

  while(passwordLenght<8 || passwordLenght>128 || isNaN(passwordLenght)) {
    alert ("Please select a number between 8 and 128")
    var passwordLenght=parseInt(window.prompt("Please select the desired lenght for your password between 8 and 128 characters "),10);
  }


  var uppercase = window.confirm("Do you want to use uppercase characters")

  var special = window.confirm("Do you want to use special characters")

  var numeric = window.confirm("Do you want to use numeric characters")

  while (uppercase == false && special== false && numeric == false){
    alert ("You need at least 1 of the options")

    var uppercase = window.confirm("Do you want to use uppercase characters")

    var special = window.confirm("Do you want to use special characters")
  
    var numeric = window.confirm("Do you want to use numeric characters")

  }

 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
