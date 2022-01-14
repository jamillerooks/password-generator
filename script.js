// Assignment Code
var password = ""; //The password will be generated once the user input is validated.
var employeeInput = []; //This array will be used to push the data collected from the employee (length uppercase, lowercase, symbols, numbers).
var characterTypes = ["abcdefghijklnmopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*(){}[]=<>,;"];//These will be used to generate a random password after userInput determined.

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = 0;
  //Prompt the user to select the length of the password.
    while (Number.isNaN(passwordLength) ||passwordLength  < 8 || passwordLength > 128)
     passwordLength = (prompt("Enter the desired length of the password (8 - 128) characters."));

  //Prompt the employee to select whether they want Lower, Upper, Number, and Symbols in the the password.
      var lowercase = false;
      var uppercase = false;
      var numbers = false;
      var symbols = false;

    while(!lowercase && !uppercase && !numbers && !symbols){
    
      lowercase = confirm("Click to include lowercase letters in the password");
      uppercase = confirm("Click to include uppercase letters in the password");
      numbers = confirm("Click to include numbers in the password");
      symbols = confirm("Click to include symbols in the password");
    }
    //Employee input is an array - characterTypes can be pushed into the array.
 
    if (lowercase){   employeeInput.push(characterTypes[0]); }
    if (uppercase){   employeeInput.push(characterTypes[1]); }
    if (numbers){     employeeInput.push(characterTypes[2]); }
    if (symbols){     employeeInput.push(characterTypes[3]); }

    //The join() method returns an array as a string separated with a comma. The split() method splits a string into an array of substrings. (" ") is used as separator, the string is split between words.
    employeeInput = employeeInput.join("").split("");
    
    //The for statement creates a loop that is executed as long as a condition is true.  
    for (var i = 0; i < passwordLength; i++) {
      
      var key = (Math.floor(Math.random() * employeeInput.length));
      password = password + employeeInput[key];
  }
    return password;
  }
   
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
