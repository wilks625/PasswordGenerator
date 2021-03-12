var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~+=-_<>?[{]},";
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = '!@#$%^&*(){}[]=<>/,.';

function random() {
  var randomChar = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]
  return randomChar;
}

function generatePassword(length) {
  var password = ""; //allows us to accumulate our random characters into a variable
  for (var i = 0; i < length; i++) { //this executes our loop 8 times.
      var temp = random() //this gives us a random character
      password += temp; //each time the loop runs a random character is added to password
      console.log("loop", i, password ); 
  }
  return password;
}

var minimumNumberOfCharacters =8;
var userPasswordLenth = 32;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userChoice = window.prompt("How many characters would you like the password to contain?")
  var password = generatePassword(userChoice);
  var passwordText = document.querySelector("#password");
//console.log("click")
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);