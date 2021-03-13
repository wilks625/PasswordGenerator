var specialCharacters = ['@', '%', '+','/',"'",'!','#','$','^','?',';',',',')','(','}','{','}','{','~','-','_','.',];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["1234567890"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword); // makes generate button clickable

var userChoice = []; //user input for confirms

var password = ""; //the password that will be displayed in text box

// Write password to the #password input
// function writePassword() {  //prompts how many characters will be used
//   var userChoice = window.prompt("How many characters would you like the password to contain?") 
//   var password = generatePassword(userChoice);
//   var passwordText = document.querySelector("#password");
// //console.log("click")
//   passwordText.value = password;
// }

function generatePassword() {
  var passLength = parseInt(window.prompt("How many characters would you like the password to be?"));
  //var password = generatePassword(userChoice);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}
else if (passLength > 128) {
  alert("Your input needs to be 128 characters or less");
  return;

}
else if (passLength < 8 ) {
  alert("Your input needs to be 8 characters or more");
  return;
}

else {
  var isSpecChosen = window.confirm("click OK to confirm including special characters");
  console.log(isSpecChosen);
  var isLowerCase = window.confirm("click OK to confirm including lowercase characters");
  console.log(isLowerCase);
  var isUpperCase = window.confirm("click OK to confirm including uppercase characters");
  console.log(isUpperCase);
  var isNumber = window.confirm("click OK to confirm including numeric characters");
}
if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber) {
  alert("You didn't choose a character type!");
  return;

}
if (!isSpecChosen){
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
console.log(userChoice);
return //"password";
}

function password(length) {
  var password = password.length;
for ( var i = 0; i < length; i++) {
  length += password.chatAt(Math.floor(Math.random() * userChoice));
  }  
}