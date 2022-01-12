//Dom Elements - get the id from the HTML document
var generateButton = document.getElementById('generate');
var result = document.getElementById ('password');

//Collect the user preference for generating the password
var passwordLength = 0;
while ((passwordLength < 8 || passwordLength > 128) || Number.isInteger(passwordLength) === false) {
    passwordLength = parseInt(prompt("Enter the desired length of your password. Must be between 8-128"))

}

var lower = false
var upper = false
var number = false
var symbol = false


while (lower, upper, number, symbol === false){
lower = confirm('Click ok to confirm you want lowercase letters in your password.');
upper = confirm('Click ok to confirm you want uppercase letters in your password.');
number = confirm('Click ok to confirm you want numbers in your password.');
symbol = confirm("Click ok to confirm  you want symbols in your password.('!@#$%^&*(){}[]=<>,;'')");
}


//Create an object for the functions//
const randomFunction = {
    lower:  getRandomLower,
    upper:  getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
//You can use https://net-comber.com/charset.html to generate a random lower case letter, upper case letter, number or symbol.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>,;'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
