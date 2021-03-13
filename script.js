//variables for special characters, lowercase and uppercase letters, and numbers
var specialCharacters = "`~!@#$%^&*()[]{};:<>?/";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword); // makes generate button clickable


var password = ""; //the password that will be displayed in text box

//Write password to the #password input
function createPassword(word) {  //word is a placeholder for the value of password text, so something shows in the textbox

  var passwordText = document.querySelector("#password");
  passwordText.value = word;
}

function generatePassword() {
  var userChoice = ""; //user input for confirms
  var passLength = parseInt(window.prompt("How many characters would you like the password to be?"));
  //var password = generatePassword(userChoice);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}
else if (passLength > 128) { //validation for maximum password length
  alert("Your input needs to be 128 characters or less");
  return;

}
else if (passLength < 8 ) { //validation for minimum password length
  alert("Your input needs to be 8 characters or more");
  return;
}

else { // confirm pop up to allow user to choose to include special characters, lowercase letters, uppercase letters, and numbers
  var isSpecChosen = window.confirm("click OK to confirm including special characters");
  console.log(isSpecChosen);
  var isLowerCase = window.confirm("click OK to confirm including lowercase characters");
  console.log(isLowerCase);
  var isUpperCase = window.confirm("click OK to confirm including uppercase characters");
  console.log(isUpperCase);
  var isNumber = window.confirm("click OK to confirm including numeric characters");
}
if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber) { //validation for not choosing any type of characters
  alert("You didn't choose a character type!");
  return;

}
if (isSpecChosen){
  userChoice = userChoice.concat(specialCharacters);
}
if (isLowerCase){
  userChoice = userChoice.concat(lowerCase);
}
if (isUpperCase){
  userChoice = userChoice.concat(upperCase);
}
if (isNumber){
  userChoice = userChoice.concat(numbers);
}
console.log("good morning", userChoice, passLength);  //used for testing
writePassword(passLength, userChoice);
}

function writePassword(length, choice) { //taking user choices into consideration when creating password
  console.log("goodnight", length, choice)


  var password = "";
for ( var i = 0; i < length; i++) {
  password += choice.charAt(Math.floor(Math.random() * choice.length));
  console.log("goodafternoon", password) //used for testing
  }  
  createPassword(password);
}