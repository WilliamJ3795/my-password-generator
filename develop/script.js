// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var choiceUpper;
var choiceLower;
var choicemNumber;
var choiceSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Var To Upper Case 
var newUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpper);
//--------------------------------------
//var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters do want? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  if(!passwordLength) {
    alert("Need a value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    choiceLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + choiceLower);
    choiceUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + choiceUpper);
    choiceumber = confirm("Will this contain numbers?");
    console.log("Number " + choiceNumber);
    choiceSpecial = confirm("Will this contain special characters?");
  console.log("Special Character " + choiceSpecial);

  };